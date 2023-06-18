//Every & Some

const people = [
    {name:'Jhon', age : 15},
    {name:'Jane',age:15},
    {name:'Alaa',age:15},
    {name:'mary',age:22},
    {name:'Mark',age:27}
];

const isEveryOneAdult = people.every(function(currentPerson){
    return currentPerson.age>=18 ; 
  
});

console.log('Is Every one Adult ? ' + isEveryOneAdult) ; 

const isSomePeopleAdult = people.some(function (curr){
    return curr.age>=18 ;
});

console.log(isSomePeopleAdult) ;


//find the person that has m in the first letter of his name and his age >18
const x =  people.find(function(curr){
    if(curr.name[0].toLowerCase()==='m' && curr.age>=18)
    {
        return true
    }else 
    return false ; 
}) ; 

console.log(x) ; 

const xx =  people.filter(function(curr){
    if(curr.name[0].toLowerCase()==='m' && curr.age>=18)
    {
        return curr
    }
}) ; 

console.log(xx) ; 
// predicate : function returns true or false only