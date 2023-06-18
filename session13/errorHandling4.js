try{
    const res = summation () ; 
    console.log("the result is : ") ; 
    console.log(res) ; 
}
catch(error){
    if(error instanceof ReferenceError)
    {
        console.error("you are calling a function  that is not exist");
    }
    else if(error instanceof TypeError){
       console.error("Something wrong with your types ") ;  
    }else {
        console.log("something went wrong") ;
    }
}
//you can google the type of errors in js 

//you can create your custom error 
//create a class extends the error class , and customize it