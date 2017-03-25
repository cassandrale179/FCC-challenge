function binaryAgent(str) {
  var num = "100101"; 
  var sum = 0; 
  for (var i = 0; i < num.length; i++){
    sum = sum*2 + parseInt(num[i]); 
  }
  return sum; 
}
 
