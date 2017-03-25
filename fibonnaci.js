
/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.*/

function sumFibs(num){
  var arr = []
  arr[0] = 1
  arr[1] = 1
  for (var i = 2; i < num; i++)
  {
    arr[i] = arr[i-1] + arr[i-2];
    if (arr[i] > num) break;
    else{
      arr.push(arr[i]);
    }
  }
arr.splice(-1, 1)

  //Filter out the even number
  var myOddArray = arr.filter(function(num){
    return num % 2 !== 0
  });

  //Sum all the odd number in the odd Array
  var sum = 0;
  for (var j = 0; j < myOddArray.length; j++){
    sum += myOddArray[j];
  }
  return sum;
}

console.log("Sum of Fibonnaci Odds: " + sumFibs(1000));
