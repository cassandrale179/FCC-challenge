/*Write a function which takes a ROT13 encoded string as input and returns a decoded string.*/ 

function rot13(str) {
    var string = "";  
    for (var i = 0; i < str.length; i++){
        if (str[i].charCodeAt() < 65){
            string += str[i]; 
        }
        else if (str[i].charCodeAt() <= 77){
            string += String.fromCharCode(str[i].charCodeAt()+13); 
        }
        
        if (str[i].charCodeAt() > 77){
            string += String.fromCharCode(str[i].charCodeAt()-13); 
        }
    }
    return string; 
}

rot13("SERR PBQR PNZC");
