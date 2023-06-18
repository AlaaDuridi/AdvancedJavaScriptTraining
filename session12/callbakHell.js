/* CALLBACK HELL 
PYRAMID OF DOOM 
HADOUKEN CODE 
*/
function getData(callback){
    setTimeout(
        ()=>{
    console.log('hello from  getData') ;

            const data ="Data" ;
            callback(data) ;
    console.log('hello after  getData') ;

        },1000
    );
}
//console.log("Hello World");
function getMoreData(a, callback){
    setTimeout(()=>{
    console.log('hello from  getMoreData') ;
        const moreData = a + " with More Data" ;
        callback(moreData);
    console.log('hello after  getMoreData') ;
    },1000);
}
function getEvenMoreData(b, callback) {
    setTimeout(()=>{
    console.log('hello from  getEvenMoreData') ;
        const evenMoreData = b+' with Even More Data' ; 
        callback(evenMoreData) ; 
    console.log('hello after  getEvenMoreData') ;
    },1000);
}

function getEvenEvenMoreData(c, callback) {
    setTimeout(()=>{
    console.log('hello from  getEvenEvenMoreData') ;
        const evenEvenMoreData = c + ' with Even Even More Data' ; 
        callback(evenEvenMoreData) ; 
    console.log('hello after  getEvenEvenMoreData') ;
    },1000) ; 
}
function getFinalData(d, callback) {
    setTimeout(()=>{
    console.log('hello from  getFinalData') ;
        const finalData = d+ ' with Final Data' ; 
        callback(finalData) ;
    console.log('hello after  getFinalData') ;
    },1000);
}
getData(function (a) {
    getMoreData(a,function (b){
        getEvenMoreData(b, function(c){
            getEvenEvenMoreData(c, function(d){
                getFinalData(d, function(finalData){
                    console.log(finalData) ; 
                });
            });
        });
    } );
});

/* output : 
hello from  getData
hello after  getData
hello from  getMoreData
hello after  getMoreData
hello from  getEvenMoreData
hello after  getEvenMoreData
hello from  getEvenEvenMoreData
hello after  getEvenEvenMoreData
hello from  getFinalData
Data with More Data with Even More Data with Even Even More Data with Final Data
hello after  getFinalData
*/
