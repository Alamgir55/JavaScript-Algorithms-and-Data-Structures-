
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

function validAnagram(first, second){
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

validAnagram('anagram', 'nagaram');