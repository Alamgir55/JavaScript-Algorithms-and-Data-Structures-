// Recursive Function

/* function countDown(num){
    if(num <= 0){
        console.log("All Done");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
} */
//countDown(3);

//Non-Recursive Function

/* function countDown(num){
    for(var i = num; i > 0; i--){
            console.log(i);
    }
    console.log("All done");
}
countDown(5); */

// Recursive Function

// function sumRange(num){
//     if(num === 1) return 1;
//     return num + sumRange(num-1);
// }

// console.log(sumRange(5));

    //Non-Recursive Function
/* function factorial(num){
    let total = 1;
    for(let i = num; i > 0; i--){
        console.log(i);
        console.log(total); 
        total *= i
    }
    return total;
}           
console.log(factorial(4));      */           
   
    // Recursive Function
/* function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}                        
            
console.log(factorial(4)); */

/* 
function collecctOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }
    helper(arr);
    return result;
}

console.log(collecctOddValues([1,2,3,4,5,6,7,8,9])); */

/* function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }   
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5])); */
       
/* function power(str1, str2){
    if(str1 > 0 || str2 > 0){
        return Math.pow(str1, str2);
    }
}

console.log(power(2, 4)); // 16
                
                    */
                       
/* function factorial(num){
    if(num === 0){
        return 1;
    }else{
        return num * factorial(num - 1);
    }

}

console.log(factorial(4)); */

// function productOfArray(arr) {
//     if(arr.length === 0){
//         return;
//     }
//     return arr[0] * productOfArray(arr.slice(1));      
// }   

// productOfArray([1,2,3]);

/* function recursiveRange(num){
    if(num === 0){
        return 0;
    }
    return num + recursiveRange(num -1);
    
}
console.log(recursiveRange(6)); */

/* function reverse(str){
    if(str.length <= 1){
        return str;
    }
    // console.log(str[0])
    // console.log(str.slice(1))
    
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('welcome')); */

// function isPalindrome(str){
//     if(str.length === 1) return true; 
//     if(str.length === 2) return str[0] === str[1];
    
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
//     return false;
// }

// console.log(isPalindrome('awesome')); // false
// //isPalindrome('tacocat') // true
// console.log(isPalindrome('aaaaaaa'));

// someRecursive([4,6,8,9], isOdd) // true

/* const isOdd = val => val % 2 !== 0;

function someRecursive(array, callback){
    if(array.length === 0) return false;
    if(callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}

console.log(someRecursive([4,6,8,9], isOdd)); */