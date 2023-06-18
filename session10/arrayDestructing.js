/*############Array Destructing #################*/

const nums = [100,200,300,400] ; 
const [v1,v2,v3]=nums ;

console.log(v1,v2,v3) ;

const info = ['ahmad' , 25,93.5,'nablus','alnNajah',3,false];
const [name,age,score,address,...others] = info ;
//there is 3 info left 

/*Example use  case in reactjs */ 
/* const [value, setValue] = useState(50) ; */ 

console.log(name,age,score,address) ;
console.log(others) ;  



// we can do swap 
// [v1,v2] = [v2,v1]

let x=10 ,y=20 ; 
[x, y]=[y,x] //swap
console.log(x,y) ;