function doSomething() {
    var myVar = 1;
    console.log(myVar);

    if (true) {
      var myVar = 2;
      console.log(myVar);
    }
    console.log(myVar);
  }
  
  doSomething();
  console.log(myVar);
