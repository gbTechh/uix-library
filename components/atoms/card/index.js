import { Card as CardHOC } from './Card';

import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
// import { ProductImage } from './ProductImage';
// import { ProductTitle } from './ProductTitle';

export { CardHeader } from './CardHeader';
export { CardBody } from './CardBody';
export { CardFooter } from './CardFooter';
// export { ProductImage } from './ProductImage';
// export { ProductTitle } from './ProductTitle';


export const Card = Object.assign( CardHOC, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,

})


export default Card