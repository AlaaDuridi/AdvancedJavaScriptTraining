// callback function as an arrow function 
let cities = ['jerusalem', 'makkah', 'delhi', 'detroit'];
function print(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}
function changeFirstLetter(arr) {
  return arr.map((element) => element.charAt(0).toUpperCase() + element.slice(1));
}
cities = changeFirstLetter(cities);
print(cities);
