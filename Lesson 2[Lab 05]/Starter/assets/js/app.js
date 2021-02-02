// Define UI Variables 

const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button
//the reload button at the top right of navigation
const reloadIcon = document.querySelector('.fa');   

const assend = document.querySelector('#assend');

const desend = document.querySelector('#desend');



// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
// filter.addEventListener('keyup', filterTasks);

   // Remove task event [event delegation]
taskList.addEventListener('click', removeTask);

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

// Even tistner for Assending
// assend.addEventListener('click', assending);

// Event Listner For Descending
// desend.addEventListener('click', desending);

// dropdown Event Listner
// dropbtn.addEventListener('click', order);





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
