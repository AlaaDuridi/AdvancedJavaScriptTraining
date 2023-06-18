// Literal Object Notation
const person = { 
    firstName : 'Alaa',
   'last name': 'Duridi',
    age : '20',
    hobbies : ['reading', 'games', 'coding'],
    greet : function(){
        console.log('Hello Every One') ; 
    },
    score : {
        maths : 90 ,
        science : 80 ,
        calcAvg : function () { 
            let avg = (90+80)/2 ; 
            console.log(avg) ;
            return avg ; 
        }
    }, 
    address: null 
};
console.log(person);
console.log(person['last name']) ; 
console.log(person.age);
console.log(person.hobbies[0]) ; 
console.log(person.score.maths) ;

person.greet() ; 
person.score.calcAvg() ; 


//  Object()  constructor 
const person2 = new Object({
    firstName : 'Alaa',
   'last name': 'Duridi',
    age : '20',
    hobbies : ['reading', 'games', 'coding'],
    greet : function(){
        console.log('Hello Every One') ; 
    },
    score : {
        maths : 90 ,
        science : 80 ,
        calcAvg : function () { 
            let avg = (90+80)/2 ; 
            console.log(avg) ;
            return avg ; 
        }
    }, 
    address: null 

});
console.log(person2);

if(typeof person2 ==='object')
    console.log('person2 is object');
