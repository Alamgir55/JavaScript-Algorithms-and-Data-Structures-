/* function numberCompare(num1, num2){
    return num1 - num2;
}

console.log([6,4,15,10].sort(numberCompare)); */

/* 

function compareByLen(str1, str2){
    return  str2.length - str1.length;
}

console.log(["Data Structures","Alamgir", "Algorithms","Hossain"].sort(compareByLen)); 
*/

/* function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


////console.log(bubbleSort([37,45,29,8])); */


/* function bubbleSort(arr){
    let noSwaps;
  for(let i = arr.length; i > 0; i--){
      noSwaps = true;
    for(let j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            noSwaps = false;
        }
    }
    if(noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([8,1,2,3,4,5,6,7])); */



function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(arr);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);