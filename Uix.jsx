import { ThemeProvider } from '@emotion/react';
import React from 'react'
import GlobalStyles from './components/Global';
import { myContext } from './context/provider';

import { darkTheme , theme  } from './theme/utils';




const Uix = ({ UIXDarkTheme, UIXTheme , children}) => {
 
  return (
    <>
    <myContext.Consumer>
    {context => { 
      return (
    <React.Fragment>
      <ThemeProvider theme={ context?.isDark ? UIXTheme ?? theme : UIXDarkTheme ?? darkTheme }>
        <GlobalStyles />
          { children }         
      </ThemeProvider>      
    </React.Fragment>
  )}}
  </myContext.Consumer>
    <GlobalStyles />    
  
  
    </>
  )
}

export default Uix