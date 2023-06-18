// {} are mandatory for non -export default-
/*
import {PI} from './utility.mjs' ; 
// import PI from './utility.mjs' ;  //Output: [Function : sum ] , the export default
import {capitalizeFirstWord} from './utility.mjs' ; 
import {replaceStr} from './utility.mjs' ; 
import sth from './utility.mjs'
*/

//using destructing

import sth , {PI, capitalizeFirstWord,replaceStr as rep} from './utility.mjs' ; 
//or 
import * as utils from './utility.mjs' ; 
console.log(utils.default(10,20)) ; 
console.log(PI) ; 
console.log(capitalizeFirstWord('hello dood')) ; 
console.log(rep('text','x','s')) ;
console.log(sth(5,10)) ;

 