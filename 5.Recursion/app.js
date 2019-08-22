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


function collecctOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1));
        helper(arr);
    }
}
                           