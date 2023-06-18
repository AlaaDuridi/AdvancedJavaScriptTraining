const fetchData=()=>{
    const promise = new Promise( (resolve , reject) =>{
        //this will take a lot of time 
        setTimeout( ()=>{
            const data ={
                fname:'ahmad',
                age:25,
                id:Math.random() *100 
            };
            //return data
            if(data.id>=50){
                resolve(data) ;
            }
            else{
                //means the process failed 
                reject("Failed to get user") ; 
            }
        },3000);
    }) ; 
    return promise ;
} 
console.log('program start') ; 
/* const res = fetchData() 
res.... 
this is wrong */ 
fetchData().
then(data=>{
    console.log(`Hello ${data.fname}, you are ${data.age} years old, your Id is ${data.id}`) ; 
})
.catch(err =>{
    console.log(`error happened, ${err}`) ;
})
.finally(()=>{
    console.log('everything is done!')
});
console.log('program end'); 