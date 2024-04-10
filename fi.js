let n1 = document.getElementById("num");
let r = document.getElementById("result");

function displayData(){
    let n = parseInt(n1.value)
    r.innerHTML = "Fibonnacci ("+n+")="+fib(n)
}
function fib(n){
    if (n == 1){
        return 0
    }
    else if (n == 2){
        return 1
    }
    else{
        return fib(n-1)+fib(n-2)
    }
}


// let n = document.getElementById("number");
// let r = document.getElementById("result");

function displaySum(){
    r.innerHTML = ""
    let num = parseInt(n1.value)
    r.innerHTML += "ผลรวม = " + sum(num)
}

function sum(num) {
    if(num == 0){
        return 0
    }
    else{
        return num + sum(num-1)
    }
}


// let n1 = document.getElementById("num");
// let r = document.getElementById("result");

// function displayData() {
//     let n = parseInt(n1.value);
//     r.innerHTML = "Fibonacci (" + n + ") = " + fib(n);
// }

// function fib(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacciRecursive(n, 0, 1);
// }

// function fibonacciRecursive(n, a, b) {
//     if (n === 0) {
//         return a;
//     }
//     if (n === 1) {
//         return b;
//     }
//     return fibonacciRecursive(n - 1, b, a + b);
// }
