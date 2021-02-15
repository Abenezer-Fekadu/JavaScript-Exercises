// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

const assend = document.querySelector('#assend');

const desend = document.querySelector('#desend');

//DB variable 

let DB;



// Add Event Listener [on Load]
document.addEventListener('DOMContentLoaded', () => {
    // create the database
    let TasksDB = indexedDB.open('tasks', 1);

    // if there's an error
    TasksDB.onerror = function() {
            console.log('There was an error');
        }
        // if everything is fine, assign the result to the instance
    TasksDB.onsuccess = function() {
        // console.log('Database Ready');

        // save the result
        DB = TasksDB.result;

        // display the Task List 
        displayTaskList();
    }

    // This method runs once (great for creating the schema)
    TasksDB.onupgradeneeded = function(e) {
        // the event will be the database
        let db = e.target.result;

        // create an object store, 
        // keypath is going to be the Indexes
        let objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });

        // createindex: 1) field name 2) keypath 3) options
        objectStore.createIndex('taskname', 'taskname', { unique: false });
        objectStore.createIndex('date', 'date', { unique: false });
        console.log('Database ready and fields created!');
    }

    form.addEventListener('submit', addNewTask);

    function addNewTask(e) {
        e.preventDefault();

        // Check empty entry
        if (taskInput.value === '') {
            taskInput.style.borderColor = "red";

            return;
        }

        // create a new object with the form info

        // let newTask = {
        //     taskname: taskInput.value,
        // }

        // Insert the object into the database 
        let transaction = DB.transaction(['tasks'], 'readwrite');
        let objectStore = transaction.objectStore('tasks');
        
        let request = objectStore.put(
            {
            taskname: taskInput.value,
            date: new Date()
        }
        );
        // on success
        request.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('New appointment added');

            displayTaskList();
        }
        transaction.onerror = () => {
            console.log('There was an error, try again!');
        }

    }

    function displayTaskList() {
        // clear the previous task list
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        // create the object store
        let objectStore = DB.transaction('tasks').objectStore('tasks');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {

                // Create an li element when the user adds a task 
                const li = document.createElement('li');
                //add Attribute for delete 
                li.setAttribute('data-task-id', cursor.value.id);
                // Adding a class
                li.className = 'collection-item';
                // Create text node and append it 
                li.appendChild(document.createTextNode(cursor.value.taskname));
                // Create new element for the link 
                const link = document.createElement('a');
                // Add class and the x marker for a 
                link.className = 'delete-item';
                link.innerHTML = `<a class="secondary-content"><i class="fa fa-remove"></i></a>&nbsp
                <a class="secondary-content" href="edit.html?id=${cursor.value.id}"><i class="fa fa-edit"></i></a>
                `;
                // Create date add 
                const date = document.createElement('span')
                date.className = 'date-text';
                date.innerHTML = cursor.value.date;
                date.style.marginLeft = "10em";
                
                li.appendChild(date);
                // Append link to li
                li.appendChild(link);
                // Append to UL 
                
                taskList.appendChild(li);
                cursor.continue();
            }
        }
    }

    // Remove task event [event delegation]
    taskList.addEventListener('click', removeTask);

    function removeTask(e) {

        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are You Sure about that ?')) {
                // get the task id
                let taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));
                // use a transaction
                let transaction = DB.transaction(['tasks'], 'readwrite');
                let objectStore = transaction.objectStore('tasks');
                objectStore.delete(taskID);

                transaction.oncomplete = () => {
                    e.target.parentElement.parentElement.remove();
                }

            }

        }

    }

    //   Filter Task 
filter.addEventListener('keyup', filterTasks);
    // Search 
    function filterTasks(e) {
        let userdata = e.target.value;
        let coll = taskList.querySelectorAll(".collection-item");
        // console.log(userdata);
        for(i = 0; i < coll.length; i++){
            // coll[i].style.color = "black"
            if (coll[i].firstChild.textContent.indexOf(userdata) == -1){
                coll[i].style.display = "none";
            }else {
                coll[i].style.display = "block";
            }
        }
    
    }
    

    //clear button event listener   
    clearBtn.addEventListener('click', clearAllTasks);

    //clear tasks 
    function clearAllTasks() {
        let transaction = DB.transaction("tasks", "readwrite");
        let tasks = transaction.objectStore("tasks");
        // clear the table.
        tasks.clear();
        displayTaskList();
        console.log("Tasks Cleared !!!");
    }


});

// Even tistner for Assending
assend.addEventListener('click', assending);

// Event Listner For Descending
desend.addEventListener('click', desending);

// Sorting Order
function order(e){
    let div = document.querySelectorAll(".collection-item");
    listDate = new Array();
    for (i = 0; i < div.length; i++) {
        let ld = new Date(div[i].children[0].textContent);
        listDate.push(ld.getTime());
    }
    let newlist = listDate.sort((a, b) => a - b);
    // console.log(newlist);
    console.log(listDate)
    return newlist;
}

function assending(e){
    let orderList = order();
    let doc = document.querySelectorAll(".collection-item");
    for (i = 0; i < orderList.length; i++) {
        for (j = 0; j < doc.length; j++){
            let d = doc[j].children[0].textContent;
            let nd = new Date(d);
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
    console.log(doc)
    console.log(doc[1].children[0])
    for (k = 0; k < orderdList.length; k++) {
        for (j = 0; j < doc.length; j++){
            let d = doc[j].children[0].textContent;
            let nd = new Date(d);
            if (orderdList[k] === nd.getTime()){
                let a = doc[j].innerHTML;
                doc[j].innerHTML = doc[k].innerHTML;
                doc[k].innerHTML = a;

                console.log(doc[1].children[1])
                console.log(doc)
            }
        }
    }   
}