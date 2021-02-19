//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    usingCall();
    usingApply();
    usingBind();
    usingES5();
    usingES6();


});

//Brad Person Object 
const Brad = {
    firstName: "Brad",
    lastName: "Bansely",
    fullName: function(ui_place, message) {

        ui_place.innerHTML = `${message} ${this.firstName} ${this.lastName}`;

    }
}

function usingCall() {

    //Cerscy Person Object 
    const Cerscy = {
        firstName: "Cerscy ",
        lastName: "Lanster",
        getFullname: function(text){
            return text + " " + this.firstName + " " + this.lastName
        }
    }

    // //1. Borrow fullName using call
    let newNames = {
        firstName: "Cerscy ",
        lastName: "Lanster",
    }
    var result = Cerscy.getFullname.call(newNames, "Hi i am ")

    //2. Pass call_demo[as ui_place] , Hi I am ,[message]
    call_demo.innerHTML = `${result}`;

}

function usingApply() {

    //Jon Person Object 
    const Jon = {
        firstName: "Jon",
        lastName: "Snow",
        getFullname: function(text){
            return text + " " + this.firstName + " " + this.lastName
        }
    }

    //1. Borrow fullName using apply
    var namesApply = {
        firstName: "Jon",
        lastName: "Snow",
    }
    var result = Jon.getFullname.apply(namesApply, ["Hi i am"])
    //2. Pass apply_demo[as ui_place] and Hi I am ,[as message] as array
    apply_demo.innerHTML = `${result}`; 

}

function usingBind() {
    //Daenerys Person Object 
    const Daenerys = {
        firstName: "Daenerys",
        lastName: "Targaryen",
        getFullname: function(text){
            return text + " " + this.firstName + " " + this.lastName
        }
    }
    var namesBind = {
        firstName : "Daenerys",
        lastName: "Targeryen"
    }

    //1. Borrow fullName using bind
    var result = Daenerys.getFullname.bind(namesBind, "Hi i am")
    //2. Pass bind_demo[as ui_place] , Hi I am ,[as message]
    bind_demo.innerHTML = `${result()}`; 
}
function usingES5(){
    const arya = {
        name: "Arya",
        names: ["Knight King"],
        end: function(){
            var self = this
            return self.names.map(function(target){
                return `${self.name} Killed the ${target}.`
            });
        }
    }

    Es5.innerHTML = `${arya.end()}`; 

}

function usingES6(){
    const Jon = {
        name: "Jon",
        names: ["Dany"],
        end: function(){
            return this.names.map((target)=>{
                return `${this.name} Killed ${target} in the End.`
            });
        }
    }
    Es6.innerHTML = `${Jon.end()}`;

}

