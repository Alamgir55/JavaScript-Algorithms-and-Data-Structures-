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

/* function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

console.log(sumRange(5)); */

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


/* function flatten(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


console.log(flatten([1, 2, 3, 4, 5])); */ // [1, 2, 3, 4, 5]

/* 
function productOfArray(arr){
    if(arr.length === 0){
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10]));  */



/* function recursiveRange(num){
    if(num === 0){
        return 0;
    }
    return num + recursiveRange(num-1);
}                           


console.log(recursiveRange(6)); */ // 21

// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
//        return fib(4-1) + fib(3-2)
//             return fib(3-1) + fib(1)
//                 return fib(2) + fib(1)
//                     return 2
// }

// console.log(fib(4)); // 3



/* function capitalizeFirst (arr, newArr = []) {
    if(arr.length === 0) return newArr;
    const newChar = arr[0][0].toUpperCase() + arr[0].slice(1);
    return capitalizeFirst(arr.slice(1), [...newArr, newChar]);
  }



console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
 */

/* function capitalizeFirst(arr) {
    let newArray = [];
    if (arr.length === 0) {
      return newArray;
    }
    
    newArray.push(arr[0][0].toUpperCase() + arr[0].slice(1));

    newArray = newArray.concat(capitalizeFirst(arr.slice(1)));
    return newArray;
  }
  console.log(capitalizeFirst(['first', 'second'])); */

/*   let obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
          superInner: 2,
          notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  };
  
  let obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };


function nestedEvenSum(obj, sum=0){
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        }else if(typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}
console.log(nestedEvenSum(obj1)) */




// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

/* let array = ['i', 'am', 'learning', 'recursion'];

function capitalizedWords(arr){
    if(arr.length == 0) return [];
    return [arr[0].toUpperCase()].concat(capitalizedWords(arr.slice(1)));
}

function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
}
console.log(capitalizedWords(array));
 */

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(obj)

function stringifyNumbers(obj){
    let newObj = {};
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            newObj[key] = obj[key].toString();
        }else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            newObj[key] = stringifyNumbers(obj[key]);
        }else{
            newObj[key] = obj[key];
        }
    }
    return newObj;
}


console.log(stringifyNumbers(obj));