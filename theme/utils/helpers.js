export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

 const isObject = (obj) => {
  return obj instanceof Object && Object.entries(obj).length > 0; 
}

export const getValueofObject = (obj) => {
  if(isObject(obj)){
    return obj.value;
  }
  return null;
}

const getBreakpointsOfValue = (obj) => {
  if(isObject(obj)){
    if(isObject(obj.breakpoints)){
      return Object.entries(obj.breakpoints)
    }
  }
  return null
}



const mq = (px) => {
  return `@media(min-width: ${px})`;
}

export const setBreakPointsOfValue = (obj, values, bk, sp) => {
  let objReturn = {}
  
  values.forEach(e => objReturn[e] = `${sp ? obj.value * sp : obj.value}px`);
  

  getBreakpointsOfValue(obj) && getBreakpointsOfValue(obj).map(val => {
    let mediaq = bk[val[0]];
    let valuesMq = {}

   
    values.forEach(e => valuesMq[e] = `${sp ? val[1] * sp : val[1]}px`);

    objReturn[mq(mediaq)] = valuesMq
  })


  return objReturn
}

export const setBreakPointsOfValueCol = (obj = 12, values, bk, ncols = 12, gap = 0) => {

  let objReturn = {}
  const md = (value) => (100 / (parseInt(ncols,10) / parseInt(value, 10)));    
  
  if(Number.isInteger(obj)){    
    values.forEach(e => objReturn[e] = `calc(${md(obj)}% )`);
    
    return objReturn
  }

  obj = Object.entries(obj);
  
  values.forEach(e => objReturn[e] = `calc(${md(obj[0])}% )`);

  isObjectEmpty(obj[0][1]) || Object.entries(obj[0][1]).forEach(val => {
   
    let mediaq = bk[val[0]];
    let valuesMq = {}   
    values.forEach(e => valuesMq[e] = `calc(${md(val[1])}% )`);
    objReturn[mq(mediaq)] = valuesMq
  })
  return objReturn
}

export const propsMQrys = (obj, bk) => {
  let props = {}
  Object.entries(obj).map(e => {
    if(isObject(e[1])){
      props[mq(bk[e[0]])] = e[1]
    }else{
      props[e[0]] = e[1];
    }    
  })
  return props
}



