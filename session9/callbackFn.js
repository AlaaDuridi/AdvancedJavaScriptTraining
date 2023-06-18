//example: how to create a function that call a callback function 
const myMap = (callbackFn)=> {
    callbackFn(10,20) ; 
};

myMap((x,y)=>{
    console.log(x+y) ; 
});