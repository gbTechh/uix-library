import React, { useContext, useEffect, useState } from 'react';


export const myContext = React.createContext()


export const useChangeTheme = () => { 
  const { isDark, changeTheme } = useContext(myContext)
  return { isDark, changeTheme }
}


const Provider = ( props ) => {

  const [isDark, setIsDark] = useState(false)

 
  const changeTheme = () => {          
    setIsDark(!isDark);
    localStorage.setItem('UIX-theme', JSON.stringify(!isDark));
  } 
  

  useEffect(() => {    
    const isDarkLocal = JSON.parse(localStorage.getItem('UIX-theme'));
    setIsDark(isDarkLocal)      
  }, [])
  


  return (
    <myContext.Provider value={{
      isDark,
      changeTheme,
    }}>
    {props.children}
    </myContext.Provider>
    
  )
}



export default Provider;