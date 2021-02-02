// Define UI Variables 

const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

const reloadIcon = document.querySelector('.fa');               //the reload button at the top right of navigation

const assend = document.querySelector('#assend');

const desend = document.querySelector('#desend');



// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);

   // Remove task event [event delegation]
taskList.addEventListener('click', removeTask);

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

// Even tistner for Assending
assend.addEventListener('click', assending);

// Event Listner For Descending
desend.addEventListener('click', desending);



// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}

// Add New  Task Function definition 
function addNewTask(e) {

    if (taskInput.value === '') 
    {
        taskInput.style.borderColor = "red";
       return;     //avoiding else statement
    }
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Create date add 
    const date = document.createElement('span')
    date.className = 'date-text secondary-content';
    date.innerHTML = new Date();
    date.style.marginRight = "5em";
    li.appendChild(date);
    // Append to ul 
    taskList.appendChild(li);
    e.preventDefault(); //disable form submission
}

// Clear Task Function definition 
function clearAllTasks(e) {
    //This is the first way 
    // taskList.innerHTML = '';    

    //  Second Way 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks function definition 
function filterTasks(e) {
    let userdata = e.target.value;
    let coll = taskList.querySelectorAll(".collection-item");
    // console.log(userdata);
    for(i = 0; i < coll.length; i++){
        // coll[i].style.color = "black"
        if (coll[i].firstChild.textContent.indexOf(userdata) == -1){
            coll[i].style.display = "none";
        }else if(coll[i].firstChild.textContent.indexOf(userdata) == 0){
            coll[i].style.display = "block";
        }
    }

}


// Sorting Order
function order(e){
    let div = document.querySelectorAll(".collection-item");
    listDate = new Array();
    for (i = 0; i < div.length; i++) {
        ld = new Date(div[i].children[1].textContent);
        listDate.push(ld.getTime());
    }
    let newlist = listDate.sort((a, b) => a - b);
    // console.log(newlist);
    return newlist;
}

function assending(e){
    let orderList = order();
    let doc = document.querySelectorAll(".collection-item");
    for (i = 0; i < orderList.length; i++) {
        for (j = 0; j < doc.length; j++){
            d = doc[j].children[1].textContent;
            nd = new Date(doc[j].children[1].textContent);
            if (orderList[i] === nd.getTime()){
                let a = doc[j].innerHTML;
                doc[j].innerHTML = doc[i].innerHTML;
                doc[i].innerHTML = a;
            }
        }   
    }
}
function desending(e){
    let orderdList = order().reverse();
    let doc = document.querySelectorAll(".collection-item");
    for (i = 0; i < orderdList.length; i++) {
        for (j = 0; j < doc.length; j++){
            d = doc[j].children[1].textContent;
            nd = new Date(doc[j].children[1].textContent);
            if (orderdList[i] === nd.getTime()){
                let a = doc[j].innerHTML;
                doc[j].innerHTML = doc[i].innerHTML;
                doc[i].innerHTML = a;
            }
        }
    }   
}

// Remove Task function definition 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }

}