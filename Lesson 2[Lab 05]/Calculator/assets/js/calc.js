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
        if (action == 'power')
        {
            let a = (display.value).slice(-1)
            // display.value = a;
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
        display.value = eval(exp);
        // var operators = {
        //     '&': function(a) { return sqrt(a); },
        //     '^': function(a, b) { return pow(a,b); },
        //     '+': function(a, b) { return a + b; },
        //     '-': function(a, b) { return a - b; },
        //     '*': function(a, b) { return a * b; },
        //     '/': function(a, b) { return a / b; },
        // };
        // var precedence = [
        //     ['^', '&']
        //     ['*', '/'],
        //     ['+', '-']
        // ]
        // // process until we are done
        // while (exp.length > 1) {
        //     // find the first operator at the lowest level
        //     var reduceAt = 0;
        //     var found = false;
        //     for (var i = 0; i < precedence.length; i++) {
        //         for (var j = 1; j < exp.length - 1; j++) {
        //             if ($.inArray(exp[j], precedence[i]) >= 0) {
        //                 reduceAt = j;
        //                 found = true;
        //                 break;
        //             }
        //         }
        //         if (found) break;
        //     }
        
        //     // if we didn't find one, bail
        //     if (!found) return;
        
        //     // otherwise, reduce that operator
        //     var newInput = [];
        //     var f = operators[exp[reduceAt]];
        
        //     for (var i = 0; i < reduceAt - 1; i++)
        //         newInput.push(exp[i]);
        
        //     newInput.push("" + f(
        //         parseFloat(exp[reduceAt - 1]),
        //         parseFloat(exp[reduceAt + 1])
        //     ));
        
        //     for (var i = reduceAt + 2; i < exp.length; i++)
        //         newInput.push(exp[i]);
        
        //     exp = newInput;
        // }

    }
}

