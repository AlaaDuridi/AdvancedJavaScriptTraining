// const Color = function(r,g, b) {
//     this.r =r ; 
//     this.g =g ;
//     this.b =b ;
// };

// Color.prototype.rgb = function () {
//     const {r,g,b} = this;
//     return `rgb(${r},${g},${b })`;
// }

// const teal = new Color(0,128,128) ;
// console.log(teal.rgb()) ; 
// class Person {
//     #name;
//     constructor(name){
//         this.#name = name ;
//     }
//     greet(){
//         console.log("my name is " + this.#name) ;
//     }
// }
// class Engineer extends Person {
//     constructor(name , major){
//         super(name);
//         this.major = major ;
//     }
//     greet() {
//        console.log("my name is " + this.#name+ "my major is " + this.major) ; 
//     }
// }
// const e1 = new Engineer("Omar" ,"CSE") ; 
//  e1.greet() ;
// class Animal {
//     constructor(name,species,age,gender){
//         this.name = name;
//         this.species = species;
//         this.age= age;
//         this.gender = gender;

//     }
//     sleep(){
//         console.log(`${this.name} is sleeping `);
//     }

//     move(){
//         console.log(`${this.name} is moving `);
//     }
// }
//     const a1 = new Animal("Simba","lion",3,"male");
// const keys =Object.keys(a1) ;

// for(let i=0 ;i< keys.length;i++){
//     console.log(keys[i]) ; 
// }

function createAnimalObject(name, age, species){
    const animal={} ;
    animal.name=name;
    animal.age=age;
    animal.species=species;
    animal.move=function(){
        console.log(`${this.name} is moving `) ;
    };
    return animal;
} 

const tiger1 = createAnimalObject("Raja","tiger",5);
const tiger2 = createAnimalObject("Raja","tiger",5);

console.log(tiger1.move==tiger2.move);