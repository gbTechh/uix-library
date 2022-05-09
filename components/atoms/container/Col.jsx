import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';




import {
  isObjectEmpty,  
  space,
  theme as defaultTheme,
  setBreakPointsOfValue, 
  propsMQrys 
} from '../../../theme/utils';


const px = (measure) => `${space * measure}px`; 

const StyledCol = ({
  theme, 
  span,
  offset,
  bk
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }
  
  const propsByBk = bk && propsMQrys(bk, theme.breakpoints);

  return {
    
    height:'100%',
    width: span ? `${100 / 12 * span}%` : '100%',      
    display:'flex',
    marginLeft: offset ? `${100 / 12 * span}%` : '0%',
    
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

const colConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


export const Col = styled('div', colConfig)(StyledCol);

// export const Container = ({ children, ...props  }) => {



//   return (
//     <CustomTag {...props}> 
//       { children }
//     </CustomTag>
//   )
// }
