/* let array = [50,11,12,8,6,61,54,41,13];

function findArray(arr, val){
  for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
  }
  return -1;
   
}

console.log(findArray(array, 8)); */

// Binary Search 
/* 
function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length -1;
    let middle =Math.floor((start + end && start <= end) / 2);
    console.log(start, middle, end)
    while(arr[middle] !== elem){
        
        if(elem < arr[middle] ){
            end = middle -1;
        }else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
   if(arr[middle] === elem){
    return middle;
   }
   return -1;
}

binarySearch([2,3,4,6,8,9,12,15,18,20], 15); */
 /*              

function binarySearch(arr, val){
   let start = 0;
   let end = arr.length - 1;
   let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== val){
        if(val < arr[middle]){
            start = middle - 1;
        }else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === val){
        return middle;
    }
    return -1;
}


console.log(binarySearch([20,26,28,30,34,38,39,40,43,47,49,52,58], 34));
            // [20,26,28,30,34,38,39,40,43,47,49,52,58]
            //  s                  m                 e
                // [20,26,28,30,34,38,39,40,43,47,49,52,58]
                //                       s      m        e
                    // [20,26,28,30,34,38,39,40,43,47,49,52,58]
                    //                                s  m  e

     */
    


    function naviveSearch(long, short){
        let count = 0;
        for(let i = 0; i < long.length; i++){
            for(let j = 0; j < short.length; j++){
                if(short[j] !== long[i+j]){
                    break;
                }
                if(j === short.length - 1){
                    count++
                }
            }
        }
        return count;
    }
    console.log(naviveSearch("lorie loled", "lol"));     