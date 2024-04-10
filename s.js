
let input = document.getElementById("input")
let output = document.getElementById("output")

function sum(num) {
    if(num == 0){
        return 0
    }
    else{
        return num + sum(num-1)
    }
}
function fibonacciRecursive(n) {
    if(n == 1) {
        return 0
    }
    else if (n == 2) {
        return 1
    }
    else {
        return fibonacciRecursive(n-2) + fibonacciRecursive(n-1)
    }
}
function multi(num) {
    if(num == 1){
        return 1
    }
    else{
        return  num * multi(num-1)
    }
}

function display(){
    output.innerHTML = ""
    let num = parseInt(input.value)
    output.innerHTML += "ผลรวม = " + sum(num)
}

function displayFi(){
    output.innerHTML = ""
    let num = parseInt(input.value)
    output.innerHTML += "Fibonacci = " + fibonacci(num)
}

document.getElementById("multi").addEventListener("click",()=>{
    output.innerHTML = ""
    output.innerHTML += "ผลคูณ = " + multi(input.value)
})
