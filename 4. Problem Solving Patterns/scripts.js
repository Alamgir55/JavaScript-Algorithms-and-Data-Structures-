
/// Bad Code 

/* function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    return true;
}

same([1,2,3,2], [9,1,4,4]); */

// Good Code

/* function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let fequencyCounter1 = {}
    let fequencyCounter2 = {}
    for(let val of arr1){
        fequencyCounter1[val] = (fequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        fequencyCounter2[val] = (fequencyCounter2[val] || 0) + 1
    }
    for(let key in fequencyCounter1){
        if(!(key ** 2 in fequencyCounter2)){
            return false
        }
        if(fequencyCounter2[key ** 2] !== fequencyCounter1[key]){
            return false
        }
    }
    console.log(fequencyCounter1);
    console.log(fequencyCounter2);
    return true;
} */


//same([1,2,3,2], [9,1,4,4]);

// My Code

/* function str(obj1, obj2){
    if(obj1.length !== obj2.length){
        return false;
    }
    let fequencyCounter1 = {}
    let fequencyCounter2 = {}
    for(let val of obj1){
        fequencyCounter1[val] = (fequencyCounter1[val] || 0) + 1
    }
    for(let val of obj2){
        fequencyCounter2[val] = (fequencyCounter2[val] || 0) + 1
    }
    for(let key in fequencyCounter1){
        if(!(key in fequencyCounter2)){
            return false
        }
        if(fequencyCounter2[key] !== fequencyCounter1[key]){
            return false
        }
    }
    console.log(fequencyCounter1);
    console.log(fequencyCounter2);
    return true;
}

str('rakib', 'kibra'); */

/* function validAnagram(first, second){
    if(first.length !== second.length){
        return false;
    }
    const lookup = {};
    for(let i = 0; i < first.length; i++){
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup);
    for(let i = 0; i < second.length; i++){
        let letter = second[i];

        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }
    return true;
}

validAnagram('anagram', 'nagaram'); */

// Bad Code

/* function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(i);
        for(let j = i+1; j < arr.length; j++){
            
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5])); */

// Good Code

/* function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10])); */

/* function countUniqueValue(arr){
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValue([1,1,1,2,3,5,4,1])); */

// Bad Code
/* function maxSubarraySum(arr, num){
    if(num > arr.length){
        return null;
    }
    var max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i ++){
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if(temp > max){
            max = temp;
        }
        console.log(temp, max);
    }
    return max;
}
maxSubarraySum([2,6,9,2,1,8,5,6,3],3); */

/* function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    console.log(tempSum);
    for(let i = num; i < arr.length; i++){
        console.log(arr[i]);
        console.log(arr.length)
        tempSum = tempSum - arr[i - num] + arr[i];
        console.log(arr[i - num]);
        

        console.log(arr[num]);
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

                        
console.log(maxSubarraySum([2,6,9,5,8,2,4,5],3));
//console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3)); */

