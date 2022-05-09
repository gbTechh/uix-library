import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
import { Ripple } from './Ripples';

export const useRippleAnimation = (box, color, duration = 1000) => {
 
  
  const ripples = useRef([])
  const [contador, setContador] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [arrRipples, setArrRipples] = useState([]);
  const [scale, setScale] = useState(0);

  const fnContador = () => {    
    setContador(contador + 1);    
  }

  

  useLayoutEffect(() => {
   
    function click(e){
      
      getParentElement(e.target)
      function getParentElement(element){      
        
        if(!element.classList.contains('uix-ripples')){   
          element = element.parentElement;       
          getParentElement(element);          
          
        } 

        if(element.classList.contains('uix-ripples')) {   

          
          let xx = e.pageX - element.offsetLeft;
          let yy = e.pageY - element.offsetTop; 
           
          setLeft(xx)
          setTop(yy)    
          setScale(element.offsetWidth) ; 
          return element;
        }
 
      }     
     
      
    }
    
    if(contador > 0){
      ripples.current = [<Ripple key={left+top*Math.random()} left={left} top={top} color={color} duration={duration} scale={scale}/>]
      setArrRipples((prevState) => [...prevState, ripples.current])
     
    }
    

    box.current.addEventListener('mousedown', click);
  
    return  () => {     
      box.current.removeEventListener('mousedown', click);
    }
  }, [contador ])
  
  
  useLayoutEffect(() => {
    
    let bounce = null;
    if (arrRipples.length > 0){
      clearTimeout(bounce)
      bounce = setTimeout(() => {
        setArrRipples([]);
        clearTimeout(bounce);
      }, duration);
    }
  
    return () => {
      clearTimeout(bounce);
    };
  }, [arrRipples.length, arrRipples,duration])
  
  return {
    arrRipples,
    fnContador
  }
}