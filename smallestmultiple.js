var array = [1,2,3,4,5,6,7,8,9,10,11,12,13]; 
var n = array.length; 
var i = 0; 
do{
    
    var s = n % array[i]; 
    if (s !== 0){
        n++; 
        i = 0; 
    }
    i++; 
}while(i < array.length); 
console.log(n); 





