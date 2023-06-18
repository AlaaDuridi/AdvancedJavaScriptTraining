//when working with constructor functions, the new keyword create an instance of the object and set this to the newly created instance 
function Person (name) { 
    this.name = name ; 
    console.log(this) ; 
}

function print(){
    console.log('Helo ' + this.name) ; 
}

// Person('Alaa')  ;

const p1 = new Person('Hiba') ; 

//call and apply 
print() ; 
print.call(p1) ;
print.apply(new Person('Noor')) ;
