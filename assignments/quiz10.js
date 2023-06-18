const fetchdata = (callback)=>{
    setTimeout(()=> {

        const data = 'hello' ;
        callback(data);
    },2000) ;
}

const processData = (data)=> {

    console.log('processed data' 
    ,data);
}

fetchdata(processData) ; 