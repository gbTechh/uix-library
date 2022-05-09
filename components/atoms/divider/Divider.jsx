import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {
  isObjectEmpty,    
  space,
  theme as defaultTheme, 
  propsMQrys, 
  setBreakPointsOfValueCol
} from '../../../theme/utils';
import React from 'react';




const px = (measure) => `${space * measure}px`; 

const getPropsByColor = ({ color, theme, gradient }) => {
  const colorInPalette = gradient ? theme.palette.gradient[color]?.main : theme.palette[color]?.border;  
  
  const defaultColor = {
    background: '#ccc',
  }
  const colorProps = colorInPalette && {
    background: colorInPalette,
  }
  
  return colorInPalette ? colorProps : defaultColor;
}

const StyledDivider = ({
  theme,  
  color,
  c,
  h,
  gradient
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }
 
  const propsByColor = getPropsByColor({ theme, color, gradient });
  console.log(propsByColor)

  const propsItem = {
    display:'block',
    height:h ? h : '1px',
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
    padding:'0px',
    ...(propsByColor),
    ...(c && {background:  c}),
   
 
  }

  return {    
   
    ...(propsItem),

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

const dividerConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


export const Divider = styled('div', dividerConfig)(StyledDivider);


