import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';




import {
  isObjectEmpty,  
  space,
  theme as defaultTheme,
  setBreakPointsOfValue, 
  propsMQrys 
} from '../../../theme/utils';


const StyledContainer = ({
  theme,
  maxWidth,
  fluid,
  bk
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }

  const paddingValue = setBreakPointsOfValue(theme.container.padding, ['paddingLeft', 'paddingRight'], theme.breakpoints, space);
  
  const maxWidthValue = () => {
    if(fluid){
      return '100%';
    }
    return theme.breakpoints[maxWidth] ?? theme.breakpoints['desktopS'];
  }
  
  const propsByBk = bk && propsMQrys(bk, theme.breakpoints);

  return {
    
    height:'100%',
    width: '100%',   
    ...(paddingValue),    
    maxWidth: (maxWidth && maxWidthValue()),
    marginLeft: 'auto',
    marginRight: 'auto',
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

const containerConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


export const Container = styled('div', containerConfig)(StyledContainer);

// export const Container = ({ children, ...props  }) => {



//   return (
//     <CustomTag {...props}> 
//       { children }
//     </CustomTag>
//   )
// }
