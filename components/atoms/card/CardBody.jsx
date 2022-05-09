import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import React, { useEffect, useRef, createContext, useContext } from 'react'
import { css, useTheme } from '@emotion/react'

import {
  isObjectEmpty,
  spacing,
  space,
  propsMQrys,
  theme as defaultTheme,  
} from '../../../theme/utils';
import { useRippleAnimation } from '../animations/clicks/useRippleAnimation';
import { CardContext } from './Card';


const px = (measure) => `${space * measure}px`; 



const StyledCardBody = ({ 
  theme,   
  bk,
  pt,pb,pl,pr,pd,
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }

 
  const propsByBk = bk && propsMQrys(bk, theme.breakpoints);


  return {
    appearance:'none',
    boxSizing: 'border-box',
    fontWeight: theme.typography.fontWeight.base,
   
   
    transition: 'all 0.3s linear', 
    position:  'relative',
    overflow:'hidden',
    padding: `${px(pd * 3)} ${px((pd * 2.4))}`,
    ...(pd ?? {padding: `${px(2 * 3)} ${px((2 * 2.4))}`}),
    paddingBottom: pb && px(pb), 
    paddingTop: pt && px(pt), 
    paddingLeft: pl && px(pl), 
    paddingRight: pr && px(pr),
    width:'100%',
    maxWidth:'100%',

    '&:hover': {
    
    },
    '&:after': {
     
      // ...(propsByHover && propsByHover?.after),
    },
    '&:hover::after':{
      transition: '0.2s all ease',
      // ...(propsByHover && propsByHover?.afterHover),
    },    
    ...(bk && propsByBk),
  };
};


const IGNORED_PROPS = ['color'];

const cardBodyConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


const CardBodyComponent = styled('div', cardBodyConfig)(StyledCardBody);


export const CardBody = ({ children, ...props  }) => {  

  const { pd, pt, pb, pl, pr } = useContext(CardContext);

  return (
    <CardBodyComponent
      pd={props.pd ? props.pd : pd} 
      pt={props.pt ? props.pt : pt} 
      pb={props.pb ? props.pb : pb} 
      pl={props.pl ? props.pl : pl} 
      pr={props.pr ? props.pr : pr} 
    >
      {children}
    </CardBodyComponent>
  )
}
