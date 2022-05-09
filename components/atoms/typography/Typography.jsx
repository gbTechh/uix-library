import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import React, { useRef } from 'react'
import { css, useTheme } from '@emotion/react'

import {
  isObjectEmpty,
  spacing,
  space,
  fontSize,
  propsMQrys,
  theme as defaultTheme,  
} from '../../../theme/utils';




const getTypoSizeProps = ({variant, theme, ff}) => {

  let fontSystem = "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif";

  const fontHead = ff ? theme?.typography?.fontFamily[ff] : theme?.typography?.fontFamily?.head ?? fontSystem;
  const fontBase = ff ? theme?.typography?.fontFamily[ff]  : theme?.typography?.fontFamily?.base ?? fontSystem;
  const fontCode = ff ? theme?.typography?.fontFamily[ff]  : theme?.typography?.fontFamily?.code ?? fontSystem;
  const fontPre = ff ? theme?.typography?.fontFamily[ff]  : theme?.typography?.fontFamily?.pre ?? fontSystem;


  const sizes = {
    big: {
      fontSize: `${fontSize['big'][0]}px`,
      lineHeight: `${fontSize['big'][1]}px`,
      letterSpacing: `${fontSize['big'][2]}px`,
      fontFamily: `${fontHead}`
    },
    h1: {
      fontSize: `${fontSize['h1'][0]}px`,
      lineHeight: `${fontSize['h1'][1]}px`,
      letterSpacing: `${fontSize['h1'][2]}px`,
      fontFamily: `${fontHead}`
    },
    h2: {
      fontSize: `${fontSize['h2'][0]}px`,
      lineHeight: `${fontSize['h2'][1]}px`,
      letterSpacing: `${fontSize['h2'][2]}px`,
      fontFamily: `${fontHead}`
    },
    h3: {
      fontSize: `${fontSize['h3'][0]}px`,
      lineHeight: `${fontSize['h3'][1]}px`,
      letterSpacing: `${fontSize['h3'][2]}px`,
      fontFamily: `${fontHead}`
    },
    h4: {
      fontSize: `${fontSize['h4'][0]}px`,
      lineHeight: `${fontSize['h4'][1]}px`,
      letterSpacing: `${fontSize['h4'][2]}px`,
      fontFamily: `${fontHead}`,
    },
    base: {
      fontSize: `${fontSize['base'][0]}px`,
      lineHeight: `${fontSize['base'][1]}px`,
      letterSpacing: `${fontSize['base'][2]}px`,
      fontFamily: `${fontBase}`
    },
    sm: {
      fontSize: `${fontSize['sm'][0]}px`,
      lineHeight: `${fontSize['sm'][1]}px`,
      letterSpacing: `${fontSize['sm'][2]}px`,
      fontFamily: `${fontBase}`

    },
    xs: {
      fontSize: `${fontSize['xs'][0]}px`,
      lineHeight: `${fontSize['xs'][1]}px`,
      letterSpacing: `${fontSize['xs'][2]}px`,
      fontFamily: `${fontBase}`

    },
    xxs: {
      fontSize: `${fontSize['xxs'][0]}px`,
      lineHeight: `${fontSize['xxs'][1]}px`,
      letterSpacing: `${fontSize['xxs'][2]}px`,
      fontFamily: `${fontBase}`

    },
    bquote: {
      fontSize: `${fontSize['bquote'][0]}px`,
      lineHeight: `${fontSize['bquote'][1]}px`,
      letterSpacing: `${fontSize['bquote'][2]}px`,
      fontFamily: `${fontBase}`

    },
    figcap: {
      fontSize: `${fontSize['figcap'][0]}px`,
      lineHeight: `${fontSize['figcap'][1]}px`,
      letterSpacing: `${fontSize['figcap'][2]}px`,
      fontFamily: `${fontBase}`

    },
    code: {
      fontSize: `${fontSize['code'][0]}px`,
      lineHeight: `${fontSize['code'][1]}px`,
      letterSpacing: `${fontSize['code'][2]}px`,
      fontFamily: `${fontCode}`

    },
    pre: {
      fontSize: `${fontSize['pre'][0]}px`,
      lineHeight: `${fontSize['pre'][1]}px`,
      letterSpacing: `${fontSize['pre'][2]}px`,
      fontFamily: `${fontPre}`

    },
    table: {
      fontSize: `${fontSize['table'][0]}px`,
      lineHeight: `${fontSize['table'][1]}px`,
      letterSpacing: `${fontSize['table'][2]}px`,
      fontFamily: `${fontBase}`

    },
  }

  return sizes[variant] || sizes.base;
};

const getColor = ({color, theme}) => {

  const colorInPalette = color ? theme.palette.text[color] : theme.palette.text.main;
  
  const colorProps = {
    color: colorInPalette,
  };
  
  return colorProps;
}
const StyledTypography = ({
  theme,
  variant,
  color,
  mt,mb,ml,mr,
  pt,pb,pl,pr,
  uppercase,
  lowercase,
  capitalize,
  bk,
  ff,
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }


  const px = (measure) => `${space * measure}px`; 
 
  const propsBySizeTypo = getTypoSizeProps({variant, theme, ff});
  const propsByColor = getColor({ color, theme });

  const propsByBk = bk && propsMQrys(bk, theme.breakpoints);


  return {
    boxSizing: 'border-box',
    textTransform: uppercase ? 'uppercase' : lowercase ? 'lowercase' : capitalize ?'capitalize' : 'none' ,
    marginBottom: mb ? px(mb) : px(0), 
    marginTop: mt ? px(mt) : px(0), 
    marginLeft: ml ? px(ml) : px(0), 
    marginRight: mr ? px(mr) : px(0), 
    paddingBottom: pb ? px(pb) : px(0), 
    paddingTop: pt ? px(pt) : px(0), 
    paddingLeft: pl ? px(pl) : px(0), 
    paddingRight: pr ? px(pr) : px(0), 
    ...(propsBySizeTypo),
    ...(propsByColor),
    transition: 'all 0.3s linear',
    width:'auto',
    height:'auto',
    position:'relative',
    ...(bk && propsByBk),

    '&:hover':{
   
    },
    '&:after': {

    },
    '&:hover::after':{
  
    },
    '&:before': {
     
    },
    '&:hover::before':{
     
      
    }
    
   
  };
};


const IGNORED_PROPS = ['color'];

const typographyConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


const Typo = styled('p', typographyConfig)(StyledTypography);

export const Typography = ({ children, ...props  }) => {

  let component = 'p';
  const CustomTag = Typo.withComponent(`${props.component ?? component}`);

  return (
    <CustomTag {...props}> 
      { children }
    </CustomTag>
  )
}
