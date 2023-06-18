//method number one : then and catch 
fetch("https://jsonplaceholder.typicode.com/posts/50", {method:"GET"})
.then (async res =>{
    const data = await res.json() ;
    console.log(data) ; 
    
    /*
    YOU CAN USE .THEN SYNTAX 
res.json().then (data => {
    console.log(data) ; 
});
    */
})
.catch(err =>{
    console.log("error") ; 
})
.finally (()=> {
    console.log("Anyways") ; 
})

/*
//METHOD NUMBER TWO : USING ASYNC AWAIT 
async function main () {
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{method:'GET'}) ;
    console.log(response) ; 
}
catch{
    console.error('Failed to get the data') ;
}
finally{
    console.log("Anyways") ;
}


console.log("Hello , this is trial of fetching data from a fake server ") ;
}
main();

*/

