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


const   main = async ()=>{
console.log('program start') ; 

try{
const data = await fetchData(); 
console.log(`Hello, ${data.fname}, you are ${data.age} 
your id is ${data.id}`) ; 
}
catch(error){
    console.error(`Error happened, ${error}`) ;
}
console.log('program end') ; 
}

main() ;