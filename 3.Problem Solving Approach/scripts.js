// Write a function which takes in a string and returns counts of each character in the string..

// function str(string){
//    let str = string.length;
//    return str;
// }
// console.log(str('SomeOne'));

// function countStr(str){
//     var result = {};
//     for(var i = 0; i < str.length; i++){
//         var char = str[i].toLowerCase();
        
//         if(result[char] > 0){
//             result[char]++;
            
//         }else{
//             result[char] = 1;
//         };
//     }
//     return result;
// }
// console.log(countStr('Someone'));

/* function charCount(str){
    var obj = {};
    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(obj[char] > 0){
                obj[char]++;
            }else{
                obj[char] = 1;
            };
        }
    }
    return obj;
} */


function charCount(str){
    var obj = {};
    for(var char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)){
        return false;    
    }
    return true;
}

console.log(charCount('Hellow'));

