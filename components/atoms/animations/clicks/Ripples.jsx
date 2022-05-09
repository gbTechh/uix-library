/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

import React, { useRef , useState, useEffect} from "react";




export const Ripple = ({ left,top, color='#000', duration, scale }) => {

  const span = useRef();
  
  scale = scale * 2;

  useEffect(() => {
    const setPosition = () => {
      span.current.style.top = top + 'px';
      span.current.style.left = left + 'px';
    } 
    setPosition();
    
  }, [])
  
  return (<span ref={ span } className='ui-ripple' css={css`
    position:absolute;
    transform: scale(0);
    transform-origin: center;
    transform: translate(-50%, -50%);

    width:0px;
    height:0px;
    pointer-events: none;
    border-radius: 50%;
    animation-name: animate;
    animation-duration: ${duration}ms;
    background:${color}4D;

    @keyframes animate{
      0%{
      transform: scale(0);
      opacity:1;
      width:1px;
      height:1px;
     
      }
      
      75%{
        opacity:0;
        transform: scale(${scale});
      }
      100%{
        width:1px;
        height:1px;
        opacity:0;
        transform: scale(${scale});
      }
      
    }

  `}></span>)
}



