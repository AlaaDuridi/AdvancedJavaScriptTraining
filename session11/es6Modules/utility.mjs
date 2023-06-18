  export const PI = 3.14 ;
  export const capitalizeFirstWord = (str)=>{
    const items = str.split(' ') ; 
    const [firstItem, ...rest] = items ; 

    return `${firstItem.toUpperCase()} ${rest.join(" ")}`;
}
 export const replaceStr = (str, char, replacer)=> {
    const regex = new RegExp(char,"g") ; 
    const replaced = str.replace(regex,replacer) ;
    return replaced;
}

const sum =(x,y)=>x+y;
export default sum ; 
//or: one of the two options of export 
// export {
//     PI , 
//     capitalizeFirstWord,
//     replaceStr 
// };


