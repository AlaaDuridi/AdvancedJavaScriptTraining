//Reduce 

const people = [
    {name:'Jhon', age : 15},
    {name:'Jane',age:15},
    {name:'Alaa',age:15},
    {name:'Ahmad',age:22},
    {name:'Mark',age:27}
];

//Only sum the age of the adult persons
const totalAge = people.reduce(function(acc,currentPerson){
   if(currentPerson.age>=18)
    return acc + currentPerson.age ; 
    else
    return acc ;
},0) ; 
//Only add adult persons 
//we can do this better with filters 
const adults = people.reduce(function(acc,currentPerson){
    if(currentPerson.age>=18)
     acc.push (currentPerson) ; 
     return acc ; 
     
 },[]) ; 

 console.log(adults); 

console.log(totalAge) ;


// every thing you can do it by reduce, you can also do it by for loop, or for each  