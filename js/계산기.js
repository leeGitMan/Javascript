const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");



function plus(){
    let sum = Number(num1.value) + Number(num2.value);

    result.innerText = sum;
}


function minus(){
    let sum = Number(num1.value) - Number(num2.value);

    result.innerText = sum;
}


function multi(){
    let sum = Number(num1.value) * Number(num2.value);

    result.innerText = sum;
}


function nanugi(){

    let sum = Number(num1.value) / Number(num2.value);

    result.innerText = sum;

}


function namu(){

    let sum = Number(num1.value) % Number(num2.value);

    result.innerText = sum;

}



