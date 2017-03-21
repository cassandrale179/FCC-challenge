/*Problems: Find the smallest number X that is divisible of all number within given sorted array */     
var array = [1,2,3,4,5,6,7] 
    var n = array[array.length-1]; 
    var i = 0; 
    do{
        if (n % array[i] !== 0){
            n++; 
            i = -1; 
        }
        i++; 
    }while(i < array.length); 
    console.log(n);  

/*Issues: test case that require massive iteration can result in infinite loop */ 
