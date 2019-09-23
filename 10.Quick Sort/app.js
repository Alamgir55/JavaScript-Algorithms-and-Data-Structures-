

// function pivot(arr, start=0, end=arr.length+1){
//     function swap(array, i, j) {
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
  
//     var pivot = arr[start];
//     var swapIdx = start;
  
//     for(var i = start + 1; i < arr.length; i++){
//       if(pivot > arr[i]){
//         swapIdx++;
//         swap(arr,swapIdx,i);
//         console.log(arr)
//       }
//     }
//     swap(arr,start,swapIdx);
//     console.log(arr)
//     return swapIdx;
//   }
// console.log(pivot([4,8,2,1,5,7,6,3]));


function pivot(arr, start=0, end=arr.length+1){
    function swap(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let pivot = arr[start];
    let swapinx = start;
    for(let i = pivot + 1; i< arr.length; i++){
        if(arr[start] > arr[i]){
            swapinx++;
            swap(arr, swapinx, i);
        }
    }
    swap(arr, start, swapinx);
}

console.log(pivot([4,8,2,1,5,7,6,3]));
