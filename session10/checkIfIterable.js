//Check whether the object is iterable or not

function isIterable(obj) {
    if(obj==null)return false;
    return typeof obj[Symbol.iterator] === 'function' ;
}

console.log(isIterable(new Object())) ;//false
console.log(isIterable(new Array())) ;//true