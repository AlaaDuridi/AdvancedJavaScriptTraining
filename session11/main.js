//how to import modules 

/* require */ 
const utils = require('./utility') ; 

//other syntax for require 
const {capitalizeFirstLetter, capitalizeFirstWord,PI} = require('./utility') ; 

console.log(utils.PI) ;
console.log(utils.capitalizeFirstWord(`hello ${utils.capitalizeFirstLetter('ala\'a')}`));
// console.log(module);