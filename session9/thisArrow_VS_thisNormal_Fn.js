// this in normal  function 
function Car(){ 
    this.speed = 0; 
    this.speedUp = function (speed){
        this.speed =speed; 
        setTimeout(function(){
            console.log(this.speed); // Undefined
        },1000);
    };
}
let car = new Car(); 
car.speedUp(50);
//this in arrow function 
function Car2() { 
    this.speed = 0; 
    this.speedUp = function (speed){
        this.speed =speed; 
        setTimeout(()=>{
            console.log(this.speed); // Undefined
        },1000);
    };
}
let car2 = new Car2(); 
car2.speedUp(50);