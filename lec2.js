// console.log(x)
// var x = function () {
// console.log('hi') ; 
// }
function digitalRoot(n) {
    if(Math.floor(n/10)==0)return n ; 
    else {
      let value=n, sum =0;
      
      while(value){
        sum += value%10 ;
        value= Math.floor(value/10) ; 
      }

      return digitalRoot(sum);
    }
  
  }

console.log(  digitalRoot(16));