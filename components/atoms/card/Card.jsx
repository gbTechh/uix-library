import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import React, { useEffect, useRef, createContext } from 'react'
import { css, useTheme } from '@emotion/react'

import {
  isObjectEmpty,
  spacing,
  space,
  propsMQrys,
  theme as defaultTheme,  
} from '../../../theme/utils';
import { useRippleAnimation } from '../animations/clicks/useRippleAnimation';
import { CardTemp } from './CardTemp';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';
import { CardBody } from './CardBody';
import { Divider } from '../divider/Divider';


const px = (measure) => `${space * measure}px`; 

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

const StyledCard = ({
  color,
  disabled,
  theme,  
  variant,
  borderRadius,
  gradient,
  shadow,
  hover,
  bk,
  pt,pb,pl,pr,pd,
  w, maxw, minw,
  h, maxh, minh,
  animation,

}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }

 
  const propsByBk = bk && propsMQrys(bk, theme.breakpoints);

  const propsByVariant = getPropsByVariant({ variant, theme, color, gradient });
  const propsByBorderRadius = borderRadius ? borderRadiusProps[borderRadius] : borderRadiusProps.n
  // const propsByHover = getHoverEffects({hover, color, theme, gradient,capitalize, lowercase, uppercase, variant});
  

  return {
    appearance:'none',
    boxSizing: 'border-box',
    fontWeight: theme.typography.fontWeight.base,
    cursor: disabled || 'pointer',
    opacity: disabled && 0.7,
    transition: 'all 0.3s linear', 
    boxShadow: shadow && theme.shadow['main'],
    position:  'relative',
    overflow:'hidden',
    display:'flex',
    flexDirection:'column',
    width: w ? w : '100%',
    maxWidth: maxw ? maxw : 'auto',
    minWidth: minw ? minw : 'auto',
    maxHeight: maxh ? maxh : 'auto',
    minHeight: minh ? minh : 'auto',

    ...(propsByVariant && propsByVariant.main),
    ...(propsByBorderRadius),
    // ...(propsByHover && propsByHover?.noHover),
    padding: '0px',
    userSelect: animation && 'none',

    '&:hover': !disabled && {
      boxShadow: shadow && theme.shadow['main'],
      ...(propsByVariant && propsByVariant?.hover),
      // ...(propsByHover && propsByHover.hover)
    },
    '&:after': {
      ...(propsByBorderRadius),
      // ...(propsByHover && propsByHover?.after),
    },
    '&:hover::after':{
      transition: '0.2s all ease',
      // ...(propsByHover && propsByHover?.afterHover),
    },
    '&:before': gradient ? {
      ...(propsByBorderRadius),
      // ...(propsByHover && propsByHover?.before),
      ...(propsByVariant.before),    
      boxSizing: 'border-box',
      borderRadius: `calc(${propsByBorderRadius.borderRadius} - ${2}px)`,
      
     
    
    } : {
      ...(propsByBorderRadius),
      // ...(propsByHover && propsByHover?.before),
    },
    '&:hover::before':{
     
      // ...(propsByHover && propsByHover?.beforeHover),
    },
    
    ...(bk && propsByBk),
  };
};


const IGNORED_PROPS = ['color'];

const cardConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


const CardComponent = styled('div', cardConfig)(StyledCard);



export const CardContext = createContext({});
const { Provider } = CardContext;



export const Card = ({ children, pd, pt, pb, pl, pr, ...props  }) => {  

  const btn = useRef()
  const theme = useTheme()
  const { arrRipples, fnContador} = useRippleAnimation(
    btn,
    props?.gradient ? theme.palette?.gradient[props.color]?.color : theme.palette[props.color]?.light,
    props.animation?.duration )

    const StackChildrenTypes = [CardHeader, CardBody,CardFooter, Divider];

  
  return (
    <Provider value={{
      pd, pt, pb, pl, pr,
    }}>
      <CardComponent className={props.animation && 'uix-ripples'} ref={btn} {...props} onClick={() => {
        fnContador();
        props.onClick && props.onClick()            
      }}        
      >
      {
        props.animation?.name === 'ripples' && arrRipples.map((e) => (e))      
      }
      
      {React.Children.map(children, (child, index) => {
        if (!StackChildrenTypes.includes(child.type)) {
          return (<CardTemp>{child}</CardTemp>)
        }else{
          return (child)
        }
       

      })}

   

      </CardComponent>
    </Provider>
  )
}
