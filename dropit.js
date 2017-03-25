/* Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true. */ 
function dropElements(arr, func) 
{
  for (var i = 0; i < arr.length; i++){
    if (func(arr[i]) === false){
      arr.splice(i,1); 
      i -= 1; 
    }
    if (func(arr[i]) === true){
      break; 
    }
  }
  return arr; 
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;}); 

/*Test case: 
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
*/ 
