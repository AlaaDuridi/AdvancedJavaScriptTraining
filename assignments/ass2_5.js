// foo();

// function foo() {
//   console.log("foo 1");
// }

// function foo() {
//   console.log("foo 2");
// }

var str = "aebb";
var x = str.replace(/([aeuio])/g,"");
console.log(str.length-x.length);