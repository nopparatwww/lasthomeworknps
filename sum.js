let n = document.getElementById("number");
let r = document.getElementById("result");

function displaySum(){
    r.innerHTML = ""
    let num = parseInt(n.value)
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