let person;
let option;
let amount;

// users
let acount = {
    firstAccount: ["Abeni", 100, 50],
    secondAccount: ["Leul", 30, 10]
}
// input
person = prompt("What is your Name: ");
option = prompt("Choose Option 1(Balance) 2(Deposit) 3(Withdraw) 4(Transfer)");
if (option !== "1"){
    amount = parseFloat(prompt("Enter the money amount: "));
}

// balance
function balance(user){
    if (user === "Abeni") {
        return "Balance: " + acount.firstAccount[1] + "\r\n" + "Withdraw Limit: " + acount.secondAccount[2];
    }
    else if (user === "Leul") {
        return "Balance: " + acount.secondAccount[1] + "\r\n" + "Withdraw Limit: " + acount.secondAccount[2];
    }
    else {
        return "Wrong Account!!!"
    }
}
// Deposit
function deposit(amount, name){
    if (name === "Abeni") {
        acount.firstAccount[1] = acount.firstAccount[1] + amount; 
        return "You have Successfully deposited " + amount + " and Your balance is " + acount.firstAccount[1];
    }
    else if (name === "Leul") {
        acount.secondAccount[1] = acount.secondAccount[1] + amount; 
        return "You have Successfully deposited " + amount + " and Your balance is " + acount.secondAccount[1];
    }
    else {
        return "Wrong Account!!!"
    }
}
// withdraw
function withdraw(amount, name){
    if (name === "Abeni") {
        if (amount > acount.firstAccount[1]) {
            return 'Not enough money'
        }
        acount.firstAccount[1] = acount.firstAccount[1] - amount; 
        return "You have Successfully Withdrawn " + amount + " and Your balance is " + acount.firstAccount[1];
    }
    else if (name === "Leul") {
        if (amount > acount.secondAccount[1]) {
            return 'Not enough money'
        }
        acount.secondAccount[1] = acount.secondAccount[1] - amount; 
        return "You have Successfully Withdrawn " + amount + " and Your balance is " + acount.secondAccount[1];
    }
    else {
        return "Wrong Account!!!"
    }
}
// transfering Money
function transfer(amount, name){
    let name2 = prompt("Name of Transfered Person: ");
    if (name === "Abeni") {
        if (amount > acount.firstAccount[1]) {
            return 'Not enough money';
        }else if (amount > acount.firstAccount[2]) {
            return 'Amount exceed the Transaction limit';
        }
    } else if (name === "Leul") {
        if (amount > acount.secondAccount[1]) {
            return 'Not enough money';
        }else if (amount > acount.secondAccount[2]) {
            return 'Amount exceed the Transaction limit';
        }
    }
    let f = withdraw(amount, name);
    let s =deposit(amount, name2);
    return name + ":" + f + "\r\n" + name2 + ":" + s
}  
(function() {
    if (option === "1"){
        console.log(balance(person));
    }
    else if (option === "2"){
        console.log(deposit(amount, person)); 
    }
    else if (option === "3"){
        console.log(withdraw(amount, person));
    }
    else if (option === "4"){
        console.log(transfer(amount, person));
    }
    else {
        console.log("Invalid Input!!")
    }
    
})();

