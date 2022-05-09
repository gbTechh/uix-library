import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import React, { useEffect, useRef } from 'react'
import { css, useTheme } from '@emotion/react'

import {
  isObjectEmpty,
  spacing,
  fontSize,
  theme as defaultTheme,  
} from '../../../theme/utils';
import { useRippleAnimation } from '../animations/clicks/useRippleAnimation';


const getHoverEffects = ({ hover, color, theme, gradient, capitalize, lowercase, uppercase, variant}) => {

  let contentText = hover?.content.trim() ?? 'text';
  const colorInPalette = gradient ? theme.palette.gradient[color] : theme.palette[color];  
  
  const hoverEffects = {
    pseudoTranslateX: {
      noHover:{
        color:'transparent',
      },
      hover:{
        color:'transparent',
      },
      after:{
        content:`'${contentText}'`,
        position:'absolute',
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background:'transparent',
        zIndex:2,
        top:0,
        fontWeight:500,
        left:0,
        fontFamily: theme.typography.fontFamily.base,
        color: gradient && variant === 'outline' ?  colorInPalette?.textOutline : gradient && variant === 'outline' ? colorInPalette?.text : variant === 'solid' ? colorInPalette?.text : variant === 'outline' ? colorInPalette?.main : colorInPalette?.text,
        textTransform: uppercase ? 'uppercase' : lowercase ? 'lowercase' : capitalize ?'capitalize' : 'none' ,        
      },
      afterHover:{
        content:`'${contentText}'`,
        color: hover?.color ?  hover.color : variant === 'solid' ? colorInPalette?.main : '#3b4ce0', 
        transition: 'fontWeight 0.2s ease',
      },
      before:gradient && variant === 'outline' ? {      
      }:{
        content: "''",       
        width:'0px',
        height:'100%',
        zIndex:1,
        position:'absolute',
        right: 0,   
        top:0,   
        background:hover?.bgColor ?? '#fff020', 
        transition: '0.45s width ease-in-out, 0.45s right ease-in-out, 0.45s left ease-in-out',        
  
      },
      beforeHover:gradient && variant === 'outline' ? {        
      }:{     
        width:'100%',        
        transition: '0.45s width ease-in-out, 0.45s right ease-in-out, 0.45s left ease-in-out',         
        right: 'auto',
        left: 0,        
      }
    }
  }

  return hoverEffects[hover?.name] || '';
}

const buttonSizeProps = {
  tiny: {
    fontSize: fontSize['xxs'][0],
    padding: `${spacing['xsm']} ${spacing['xsm']}`,
  },
  small: {
    fontSize: fontSize['base'][0],
    padding: `${spacing['sm']} ${spacing['sm']}`,
  },
  medium: {
    fontSize: fontSize['base'][0],
    padding: `${spacing['sm']} ${spacing['xmd']}`,
  },
  large: {
    fontSize: fontSize['base'][0],
    padding: `${spacing['sm']} ${spacing['xgt']}`,
  },
};

const borderRadiusProps = {
  n:{
    borderRadius: '0px',
  },
  xsm:{
    borderRadius:`${spacing['xxsm']}`,
  },
  sm:{
    borderRadius: `${spacing['xsm']}`,
  },
  md:{
    borderRadius: `${spacing['sm']}`,
  },
  full:{
    borderRadius: '999.99px',
  },
  circle:{
    borderRadius: '50%',
  },
 
}

const getPropsByVariant = ({ variant, color, theme, gradient }) => {

  const colorInPalette = gradient ? theme.palette.gradient[color] : theme.palette[color];  

  const defaultSolidVariantProps = {
    main: {
      border: `1px solid ${theme.palette.grey[100]}`,
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.common.white,
    },
    hover: {
      border: `1px solid ${theme.palette.grey[200]}`,
      backgroundColor: theme.palette.grey[200],
    },
  };
  
  const defaultOutlineVariantProps = {
    main: {
      border: `1px solid ${theme.palette.common.black}`,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    hover: {
      border: `1px solid ${theme.palette.common.black}`,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
  };
  
  
  const solidVariantPropsByPalette = colorInPalette && {
    main: {
      border: gradient ? `0px solid transparent` : `0px solid ${colorInPalette.main}`,
      color: colorInPalette.text,
      background: colorInPalette.main,
     
    },    
  };
  
  const outlineVariantPropsByPalette = colorInPalette && {
    main: {
      border: gradient ? `0px solid transparent` : `1.5px solid ${colorInPalette.main}`,
      background: gradient ? colorInPalette.main : 'transparent',
      color: gradient ? colorInPalette.textOutline : colorInPalette.main,
      zIndex:1,
    },    
    before: {
      content:"''",
      position:'absolute',
      top:'2px',
      left:'2px',
      width:'calc(100% - 4px)',
      height:'calc(100% - 4px)',
      margin:'0 auto',
      background:colorInPalette.bg,
      zIndex:-1,
    }
  };



  const variants = {
    outline: colorInPalette
      ? outlineVariantPropsByPalette
      : defaultOutlineVariantProps,
    solid: colorInPalette
      ? solidVariantPropsByPalette
      : defaultSolidVariantProps,  
    
  };

  return variants[variant] || variants.solid;
};

const StyledButton = ({
  color,
  size,
  variant,
  enableElevation,
  disabled,
  uppercase,
  lowercase,
  capitalize,
  theme,  
  borderRadius,
  gradient,
  hover
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }

 
  const fontSizeBySize = buttonSizeProps[size]?.fontSize;
  const paddingBySize = buttonSizeProps[size]?.padding;
  const propsByVariant = getPropsByVariant({ variant, theme, color, gradient });
  const propsByBorderRadius = borderRadius ? borderRadiusProps[borderRadius] : borderRadiusProps.n
  const propsByHover = getHoverEffects({hover, color, theme, gradient,capitalize, lowercase, uppercase, variant});
  

  return {
    appearance:'none',
    boxSizing: 'border-box',
    fontWeight: theme.typography.fontWeight.base,
    cursor: disabled || 'pointer',
    opacity: disabled && 0.7,
    transition: 'all 0.3s linear',
    padding: buttonSizeProps.medium.padding,
    fontSize: buttonSizeProps.medium.fontSize,    
    fontFamily: theme.typography.fontFamily.base,
    boxShadow: enableElevation && theme.shadows[1],
    position:  'relative',
    overflow:'hidden',
    textTransform: uppercase ? 'uppercase' : lowercase ? 'lowercase' : capitalize ?'capitalize' : 'none' ,
    ...(propsByVariant && propsByVariant.main),
    ...(propsByBorderRadius),
    ...(paddingBySize && { padding: paddingBySize }),
    ...(fontSizeBySize && { fontSize: fontSizeBySize }),    
    ...(propsByHover && propsByHover?.noHover),
    '&:hover': !disabled && {
      boxShadow: enableElevation && theme.shadows[2],
      ...(propsByVariant && propsByVariant?.hover),
      ...(propsByHover && propsByHover.hover)
    },
    '&:after': {
      ...(propsByBorderRadius),
      ...(propsByHover && propsByHover?.after),
    },
    '&:hover::after':{
      transition: '0.2s all ease',
      ...(propsByHover && propsByHover?.afterHover),
    },
    '&:before': gradient ? {
      ...(propsByBorderRadius),
      ...(propsByHover && propsByHover?.before),
      ...(propsByVariant.before),    
      boxSizing: 'border-box',
      borderRadius: `calc(${propsByBorderRadius.borderRadius} - ${2}px)`,
      
     
    
    } : {
      ...(propsByBorderRadius),
      ...(propsByHover && propsByHover?.before),
    },
    '&:hover::before':{
     
      ...(propsByHover && propsByHover?.beforeHover),
    }
   
  };
};


const IGNORED_PROPS = ['color'];

const buttonConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


const Btn = styled('button', buttonConfig)(StyledButton);

export const Button = ({ children, ...props  }) => {  

  const btn = useRef()
  const theme = useTheme()
  const { arrRipples, fnContador} = useRippleAnimation(
    btn,
    props.gradient ? theme.palette?.gradient[props.color]?.color : theme.palette[props.color]?.light,
    props.animation?.duration )



  
  return (
    <Btn className={props.animation && 'uix-ripples'} ref={btn} {...props} onClick={() => {
      fnContador();
      props.onClick && props.onClick()
          
    }}
      
    >
    
    {
      props.animation?.name === 'ripples' && arrRipples.map((e) => (e))      
    }
      { children }
    </Btn>
  )
}
