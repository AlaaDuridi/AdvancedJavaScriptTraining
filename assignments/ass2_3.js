var x = 10;
function foo() {
  console.log(x);
  var x = x + 5;
  console.log(x);
}
foo();
console.log(x);