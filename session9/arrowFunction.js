function sum (n1, n2) {

    const res = n1+n2 ; 
    return res ; 
}
// same functionality with arrow function:
const sum2 = (n1,n2) =>{
return n1+n2 ;
}

const sum3 = (n1,n2) =>
     n1+n2 ;

     //test sum :

     console.log(sum(18,8)) ; 

     //test sum2 :
     console.log(sum2(27,10)) ; 
     
     //test sum3

     console.log(sum3(7,2)) ; 
