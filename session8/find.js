const people =[
    {"name":"jhon", "age":5 , "gender":"male"},
    {"name":"jane","age":30,"gender":"female"},
    {"name":"Bob","age":20,"gender":"male"},
    {"name":"Mary","age":12,"gender":"female"},
    {"name":"Mark","age":28,"gender":"male"},
    ];

//find the first person whose name initial is m and his/her age > 10 
const x = people.find(function (curr) { 
    if(curr.name[0].toLowerCase()=='m' && curr.age >10 )return true;
    return false; 
}) ;

console.log(x) ;

// if i need to get all people

const y = people.reduce((acc,curr)=> {
    if(curr.name[0].toLowerCase()=='m' && curr.age >10 ){
        acc.push(curr) ;
    }
    return acc ; 
},[]) ; 

// or 

const yy = people.filter((curr)=>{
    if(curr.name[0].toLowerCase()=='m' && curr.age >10 ){
       return curr ; 
    }
}) ;

console.log(y) ;
console.log(yy) ;

