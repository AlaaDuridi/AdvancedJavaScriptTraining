const capitalizeFirstLetter=(str)=>{

    return str[0].toUpperCase() + str.slice(1) ; 
 };

const PI = 3.14 ;
const capitalizeFirstWord = (str)=>{
    const items = str.split(' ') ; 
    const [firstItem, ...rest] = items ; 

    return `${firstItem.toUpperCase()} ${rest.join(" ")}`;
}
const replaceStr = (str, char, replacer)=> {
    const regex = new RegExp(char,"g") ; 
    const replaced = str.replace(regex,replacer) ;
    return replaced;
}

//this is an object , an we used the enhance object literals , (shortened)
module.exports = {
    capitalizeFirstLetter,
    capitalizeFirstWord,
    replaceStr,
    PI
};

//alternative syntax 
/*1*/
// exports ={
//     capitalizeFirstWord,
//     replaceStr
// };
/*2*/
// module.exports.capitalizeFirstWord = capitalizeFirstWord ;
// module.exports.replaceStr = replaceStr ; 