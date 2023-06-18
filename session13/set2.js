const obj = new Object() ; 
obj.name = "Hiba"; 

const mySet = new Set() ; 


mySet.add(1) ;
mySet.add(2) ; 
mySet.add("Ahmad") ; 
mySet.add(obj) ; 
mySet.add(1) ;
mySet.add(2) ; 
mySet.add("Ahmad") ; 
mySet.add(obj) ; 
mySet.add({name:"Hiba"}) ;
console.log(mySet) ;
