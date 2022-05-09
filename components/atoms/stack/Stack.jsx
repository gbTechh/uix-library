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
  

const StyledGrid = ({
  theme,  
  bk,  
  wrap,  
  md,
  gap,
  justify,
  direction,
  alignItems,
  alignContent,

}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }
 
  const propsByBk = bk && propsMQrys(bk, theme.breakpoints);
  const propsContainer = {
    display:'flex',
    flexWrap: wrap ?? 'wrap',   
    flexDirection: direction ?? 'row', 
    justifyContent: justify ?? 'flex-start',
    alignItems: alignItems ?? 'center',
    alignContent: alignContent ?? 'center',
  }

  return {
    
    height:'auto',
    width: '100%',   
    ...(propsContainer),          
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

const StyledGridItem = ({
  theme,
  bk,
  gap,
  gapY,
  wrap,
  col,
  md,
  justify,
  direction,
  alignItems,
  alignContent,
  

}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }
 
  
  const widthValue = setBreakPointsOfValueCol(col, ['flexBasis', 'maxWidth'], theme.breakpoints, md, px(gap));  
  const propsByBk = bk && propsMQrys(bk, theme.breakpoints);
  

  const propsItem = {
    display:'flex',
    flexWrap: wrap ?? 'wrap',   
    width:'100%',
    paddingRight: gap ? px(gap / 2) : px(0),
    paddingLeft: gap ? px(gap / 2) : px(0),
    paddingBottom: gapY ? px(gapY / 2) : gap ? px(gap / 2) : px(0),
    paddingTop: gapY ? px(gapY / 2) : gap ? px(gap / 2) : px(0),
    flexDirection: direction ?? 'row', 
    justifyContent: justify ?? 'flex-start',
    alignItems: alignItems ?? 'center',
    alignContent: alignContent ?? 'center',
  
    ...(widthValue),
    
   
 
  }

  return {
    
    height:'auto',
    width: '100%',   
    ...(propsItem),          
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

const gridConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


const GridContainer = styled('div', gridConfig)(StyledGrid);
const GridItem = styled('div', gridConfig)(StyledGridItem);

export const Grid = ({ children, container, ...props  }) => {

  const childrenWithProps = React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...props });
    }
    return child;
  });

  return (
    <>
    {
      container ? (<GridContainer  {...props}> 
      { childrenWithProps }
      </GridContainer>) : (<GridItem  className='uix-gridItem' gap={props.gap} md={props.md} gapY={props.gapY} {...props}> 
      { children }
      </GridItem>)
    }
    </>
  )
}
