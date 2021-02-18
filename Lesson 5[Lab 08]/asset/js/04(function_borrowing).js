//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    usingCall();
    usingApply();
    usingBind();


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
    }

    // //1. Borrow fullName using call
    // const newNames = {
    // }
    
    // let namef = Cerscy.firstName.call(newNames)
    // let namel = Cerscy.lastName.call(newNames)

    //2. Pass call_demo[as ui_place] , Hi I am ,[message]
    // ui_demo.innerHTML = `Hi I am ${namel} ${namef}`;

}

function usingApply() {

    //Jon Person Object 
    const Jon = {
        firstName: "Jon",
        lastName: "Snow",
    }

    //1. Borrow fullName using apply
    //2. Pass apply_demo[as ui_place] and Hi I am ,[as message] as array


}

function usingBind() {

    //Daenerys Person Object 
    const Daenerys = {
        firstName: "Daenerys",
        lastName: "Targaryen",
    }

    //1. Borrow fullName using bind
    //2. Pass bind_demo[as ui_place] , Hi I am ,[as message]


}