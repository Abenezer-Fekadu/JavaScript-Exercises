// Operations
let display = document.querySelector(".textview");

let add = document.querySelector(".addOp");

let sub = document.querySelector(".subOp");

let mult = document.querySelector(".multOp");

let divide = document.querySelector(".divideOp"); 

let evaluate = document.querySelector(".evaluateNumbers")

let num = document.querySelector(".calculator")

let keys = num.querySelector('.frm')

let power = document.querySelector(".numP")

let root = document.querySelector(".numR")

// Function Listners
keys.addEventListener('click', e => {
    if (e.target.matches('input')) {
        const key = e.target
        const action = key.dataset.action
        if (!action){
            let a = e.target.value
            display.value = display.value + a
        }
        if (action === 'clear') {
            clearScreen();
        }
        if (action == 'root')
        {
            display.value = Math.sqrt(eval(display.value));
        }
        if (action === 'back') {
            backSpace();
        }
        if (action === 'calculate') {
            evaluation();
        }
        // console.log(e.target)
    }
})


function insertNumber(e){
    e.preventDefault();
    let a = e.target.value
    display.value = display.value + a
}
function clearScreen(e){
    display.value = "";
}
function backSpace(e){
    display.value = (display.value).slice(0, -1);
}

function evaluation(e){
    var exp = display.value;
    if(exp){
        var operators = {
            power: function(a, b) { return Math.pow(a,b); },
            add: function(a, b) { return a + b; },
            sub: function(a, b) { return a - b; },
            mult: function(a, b) { return a * b; },
            divide: function(a, b) { 
                if(b != 0){
                    return a / b;
                } else {
                    display.value = "Division by zero";
                    console.log("Division by zero");}  },
        };
        var precedence = ['^', '*', '/', '+', '-'];
        // // process until we are done
        for (var j = 0; j < precedence.length; j++) {
            var found = false;
            for (var i = 0; i < exp.length; i++) {
                if (precedence[j] == exp[i]) {
                    if (exp[i] == '^'){
                        let [a, b, c] = [parseInt(exp[i-1]), parseInt(exp[i+1]), exp[i]];
                        let ans = operators.power(a, b);
                        exp = exp.split('' + a + '' + c +'' + b).join('' + ans);
                        break;
                    }
                }

                    // else if (exp[i] == '^'){
        //                 let [a, b, c] = [parseInt(exp[i-1]), parseInt(exp[i+1]), exp[i]];
        //                 let ans = operators.power(a, b);
        //                 exp = exp.split('' + a + '' + c +'' + b).join('' + ans);
        //                 // break;
        //             }
        //             else if (exp[i] == '-'){
        //                 let [a, b, c] = [parseInt(exp[i-1]), parseInt(exp[i+1]), exp[i]];
        //                 let ans = operators.sub(a, b);
        //                 exp = exp.split('' + a + '' + c +'' + b).join('' + ans);
        //                 // break;
        //             }
        //             else if (exp[i] == '*'){
        //                 let [a, b, c] = [parseInt(exp[i-1]), parseInt(exp[i+1]), exp[i]];
        //                 let ans = operators.mult(a, b);
        //                 exp = exp.split('' + a + '' + c +'' + b).join('' + ans);
        //                 // break;
        //             }
        //             else if (exp[i] == '/'){
        //                 let [a, b, c] = [parseInt(exp[i-1]), parseInt(exp[i+1]), exp[i]];
        //                 let ans = operators.divide(a, b);
        //                 exp = exp.split('' + a + '' + c +'' + b).join('' + ans);
        //                 // break;
        //             }
        //             else {
        //                 console.log("Invalid Input");
        //             }
                    
        //      
        // }
            }
        }
    }
    display.value = eval(exp);
}

