function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n]
  if(n <= 2) return 2
  var res = fib(n-1, memo) + fib(n-2, memo)
  memo[n] = res
  return res
}

console.log(fib(5))