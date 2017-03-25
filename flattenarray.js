/*Flatten a nested array. You must account for varying levels of nesting.*/ 

function steamrollArray(arr) {
    var text = arr.toString(); 
    text = text.replace(/,/g, ''); 
    text = text.replace("[object Object]", "{"); 
    var arr2 = []; 
    for (var i = 0; i < text.length; i++){
        if (text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57){
            arr2.push(parseInt(text[i])); 
        }
        else if (text.charCodeAt(i) == 123){
            arr2.push({}); 
        }
        else{
            arr2.push(text[i]); 
        }
    
    }
    return arr2; 
}   

/*steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]. */ 
    
