
// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let lowest = i;
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }


// console.log(selectionSort([34,22,10,19,17]));




function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}



console.log(insertionSort([2,1,9,4,76]));