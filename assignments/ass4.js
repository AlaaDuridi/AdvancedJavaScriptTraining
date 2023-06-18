function spinWords(string){
    //TODO Have fun :)
    out =[];
    arr = string.split(' ') ; 
    
    for (var i =0 ; i<arr.length ;i++) {
      if(arr[i].length >4){
        out.push(reverseString(arr[i]))
      }else {
        out.push(arr[i]) ; 
      }
    }
    return out.join(' ');
  }
  
  function reverseString(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
    }
    test = 'hello rd world' ; 

    console.log(spinWords(test));

