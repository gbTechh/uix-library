import { spacing } from './units';

const white = '#fff';
const black = '#000';

const palette = {  
  common: {
    black, 
    white,
  },
  default:{
    main:'#fff',         
    secondary:'#f5f5f5',         
    middle:'#e9e9e9',         
    soft:'#eaeaea',         
    clear:'#fefefe',         
    light:'#353535',
    text:'#1b1b1b',
    text_secondary:'#f1f1f1',
    text_darken:'#c2c2c2',
    border:'#c2c2c2',
  },
  primary:{
    main:'#3b4ce0',      
    secondary:'#4857df',      
    middle:'#5967e7',      
    soft:'#6b78ee',      
    clear:'#7e8afa',      
    light:'#909bf8',  
    text:'#ffffff',
    text_secondary:'#f1f1f1',
    text_darken:'#c2c2c2',
    text_contrast:'#000000',
    bg_outline:'#fff',
    border:'#909bf8'
  },
  secondary:{
    main:'#5bf19a',
    secondary:'#72f1a7',
    middle:'#84f0b1',
    soft:'#97f5be',
    clear:'#a5f6c7',
    light:'#bffdd9',
    text:'#ffffff',
    text_secondary:'#f1f1f1',
    text_darken:'#c2c2c2',
    text_contrast:'#000000',
    bg_outline:'#fff',
  },
  warning:{
    main:'#fc9804',
    secondary:'#ffa217',
    middle:'#FBA420',
    soft:'#fdac31',
    clear:'#fdb64b',
    light:'#ffbd59',  
    text:'#ffffff',
    text_secondary:'#f1f1f1',
    text_darken:'#c2c2c2',  
    text_contrast:'#000000', 
    bg_outline:'#fff', 
  },
  error:{
    main:'#ff2b47',
    secondary:'#ff3e58',
    middle:'#fd5269',
    soft:'#fd6478',
    clear:'#ff798b',
    light:'#ff8d9c',
    text:'#ffffff',
    text_secondary:'#f1f1f1',
    text_darken:'#c2c2c2',
    text_contrast:'#000000',
    bg_outline:'#fff',
  },
  text:{
    main:'#2a2a2a',
    head:'#ffffff',
    boquote:'#f5f5f5',
    subtitle:'#f1f1f1',
    link:'#e6e6e6',
    soft:'#d6d6d6',
    grey:'#cccccc',
  },
  background:{
    main:'#ffffff',
    secondary:'#f5f5f5',
    middle:'#f1f1f1',
    soft:'#e6e6e6',
    clear:'#d6d6d6',
    light:'#cccccc',
    bg_outline:'#fff',
  },
  black:{
    just:'#000',
    secondary:'#161616',
    middle:'#0e0e0e',
    soft:'#202020',
    opaque:'#2a2a2a',
    grey:'#353535',
  },
  white:{
    just:'#ffffff',
    secondary:'#f0f0f0',
    middle:'#e6e6e6',
    soft:'#dddddd',
    opaque:'#d4d4d4',
    grey:'#c3c3c3',
  },
  grey:{
    100: '#EAEAEA',
    200: '#C9C5C5',
    300: '#888',
    400: '#666',
  },
  gradient:{
    rainbow:{
      main:'conic-gradient(#fd004c,#fe9000,#fff020,#3edf4b,#3363ff,#b102b7,#fd004c)',
      text:'#ffffff',
      textOutline:'#000',
      border:'#ffffff',
      color:'#aaaaaa',
      transparent:'#5B42F3CC',
      bg:'#fff'

    },
    purple:{
      main:'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)',
      text:'#ffffff',
      textOutline:'#000000',
      border:'#AF40FF',
      color:'#ffffff',
      transparent:'#5B42F3CC',
      bg:'#fff'
    },
    orange:{
      main:'linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%)',
      text:'#ffffff',
      textOutline:'#000000',
      border:'#F09819',
      color:'#FF512F',
      transparent:'#FF512FCC',
      bg:'#fff',
    }

  }
  
}

const shadows = {
  0: 'none',
  1: '0px 5px 10px rgba(0, 0, 0, 0.12)',
  2: '0px 8px 30px rgba(0, 0, 0, 0.24)',
};

const typography = {
  fontFamily : {
    heading:  '"Poppins", sans-serif',
    base: 	  '"Open Sans", sans-serif',
    code: 		'Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
    pre: 		  '"Courier 10 Pitch", Courier, monospace'
  },
  fontWeight : {
    heading:	800,
    title:    600,
    base: 		400,
    strong:		700,
    bquote: 	500,
    tiny:     300,
    figcap: 	400,
  }
};

const shape = {
  borderRadius: spacing['xsm'],
};

const breakpoints = {
  xs: '320px',
  xxs: '375px',
  xxxs: '425px',
  md: '768px',
  xmd: '960px',
  xxmd: '1024px',
  l: '1124px',
  xl: '1440px',
  xxl: '1800px',
  xxxl: '2560px'
}

const container = {
  
  padding: {
    value: 2,
    breakpoints: {
      mobileS: 3,
      tabletS: 4,
      desktopS: 5,
    }
  }
}

const shadow = {
  main: '0 8px 30px rgba(0, 0, 0, 0.15)',
}


export const theme = {
  palette,
  shadows,
  typography,
  shape,
  spacing,
  container,
  breakpoints,
  shadow
};

