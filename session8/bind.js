const p1 = {
    name : 'Ahmad' ,

    greet : function () {
        console.log('Hello , ' , this.name) ; 
    }
}

function sayHello1 (){
    console.log('Hello' , this.name) ; 
}

sayHello1.call(p1) ;
sayHello2 = sayHello1.bind({name:'Alaa'}) ; 
sayHello2() ;

p1.greet() ;

sayHello3 = p1.greet.bind({name:'Harry'}) ;
sayHello3() ; 