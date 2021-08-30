function fib(n) {
    if(n==1||n==0)return n
    return fib(n-1)+fib(n-2);
}
console.log(fib(42));
setTimeout(() => {
    console.log("hiiiiiiii");
}, 500);