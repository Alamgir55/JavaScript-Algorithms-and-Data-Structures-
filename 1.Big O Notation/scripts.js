// Bad
function addUpTo(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
//console.log(addUpTo(6));

// Good
function addUpTo2(n){
    return n * (n + 1) / 2;
}
//console.log(addUpTo2(2));

// Bad 
function addUpToTime(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
let t1 = performance.now();
//addUpToTime(100000000);
let t2 = performance.now();
//console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds `);

// Good 

function addUpToTime2(n){
    return n * (n + 1) / 2;
}
let time1 = performance.now();
//addUpToTime2(100000000);
let time2 = performance.now();
//console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds `);

////
function countUpAndDown(n){
    console.log('Going up!');
    for(let i = 0; i < n; i++){
        console.log(i);
    }
    console.log('At the top!\nGoing down..');
    for(let j = n - 1; j >= 0; j--){
        console.log(j);
    }
    console.log("Break down.By");
}
//countUpAndDown(10);

function printAllPairs(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i, j);
        }
    }
}
//printAllPairs(2);

function logAtLeast5(n){
    for(let i = 1; i <= Math.max(5, n); i++){
        console.log(i);
    }
}

//logAtLeast5(1);

function logAtMost5(n){
    for(let i = 1; i <= Math.min(5,n); i++){
        console.log(i);
    }
}
//logAtMost5();

function sum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
//console.log(sum([10,2]));

function double(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

console.log(double([1, 2, 3]));
