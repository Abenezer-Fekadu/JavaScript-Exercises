
let operation;
let count = 0 ;
let answer;
let inputNumber = new Array();
// input

operation = prompt("Choose Operation 1(+) 2(-) 3(*) 4(/)");
while (true){
    i = prompt("Enter Number");
    if (i == ""){
        break;
    }
    inputNumber[count] = i
    count++;
}
if (operation == '+'){
    add();
}
else if (operation == '-'){
    sub();
}
else if (operation == '*'){
    multi();
}
else if (operation == '/'){
    div();
}
else {
    console.log("Invalid Input!!")
}

// Functions
function add(){
    answer = parseInt(inputNumber[0]);
    for (let i = 1; i < inputNumber.length; i++) {
        answer += parseInt(inputNumber[i]);
    }
    return answer;
}
function multi(){
    answer = parseInt(inputNumber[0]);
    for (let i = 1; i < parseInt(inputNumber.length); i++) {
        answer *= Number(inputNumber[i]);
    }
    return answer;
}
function sub(){
    answer = parseInt(inputNumber[0]);
    for (let i = 1; i < parseInt(inputNumber.length); i++) {
        answer -= Number(inputNumber[i]);
    }
    return answer;
}
function div(){
    answer = parseInt(inputNumber[0]);
    for (let i = 1; i < parseFloat(inputNumber.length); i++) {
        if (inputNumber[i] == 0){
            console.log("Division by Zero")
        }
        answer /= Number(inputNumber[i]);
    }
    return answer;
}


(function() {
    console.log("The Answer For The Operation is " + answer);
})();