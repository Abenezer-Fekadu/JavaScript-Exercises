// UI Vars 
const postDiv3 = document.getElementById('thePosts');
const filter = document.getElementById('filter');

const assend = document.querySelector('#assend');

const desend = document.querySelector('#desend');

const loader = document.querySelector('.load');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    loadDataNew();
});


//load a single customer function 
function load_fromPlaceHolder() {

    //open the request 
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `
        
                <div class="item">
                <div class="image">
                    <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
                </div>
                <div class="content">
                    <a class="header" href="#" id="bTitle">
                    ${post.title.toUpperCase()}
                    </a>
                    <div class="description">
                        <p id="bDesc">
                        ${post.body}
                        </p>
                    </div>
                    <div class="extra">
                        <a class="ui floated basic violet button" href="#">Read Mores</a>
                    </div>
                </div>
            </div>
        `;
            });

            loader.classList.remove('active')
            // loader.classList.remove('dimmer')
            postDiv3.innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });



}

async function load_fromPlaceHolder_new() {
    //open the request 
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    return data;
}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `

    <div class="item collection">
        <div class="image">
            <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
        </div>
        <div class="content">
            <a class="header" href="#" id="bTitle">
            ${post.title.toUpperCase()}
            </a>
            <div class="description">
                <p id="bDesc">
                ${post.body}
                </p>
            </div>
            <div class="extra">
                <a class="ui floated basic violet button" href="#">Read Mores</a>
            </div>
        </div>
    </div>

`;
            });

            loader.classList.remove('.active');
            postDiv3.innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });

}
filter.addEventListener('keyup', filterTasks);
    // Search 
    function filterTasks(e) {
         // let userdata = (e.target.value).toUpperCase();
        let coll = document.querySelectorAll("#bTitle");
        // console.log(userdata);
        for(i = 0; i < coll.length; i++){
            // coll[i].style.color = "black"
            if (coll[i].textContent.indexOf((e.target.value).toUpperCase()) == -1){
                coll[i].parentElement.parentElement.style.display = "none";
            }else{
                coll[i].parentElement.parentElement.style.display = "block";
            }
        }
    
    }
    

// Even tistner for Assending
assend.addEventListener('click', assending);
// Event Listner For Descending
desend.addEventListener('click', desending);

// Sorting Order
function order(e){
    let div = document.querySelectorAll("#bTitle");
    listName = new Array();
    for (i = 0; i < div.length; i++) {
        listName.push(div[i].textContent);
    }
    let newlist = listName.sort();
    console.log(newlist)
    return newlist;
    
}

function assending(e){
    let orderList = order();
    let doc = document.querySelectorAll(".collection");
    for (i = 0; i < orderList.length; i++) {
        for (j = 0; j < doc.length; j++){
            let d = doc[j].children[1].children[0].textContent;
            if (orderList[i] === d){
                let a = doc[j].innerHTML;
                doc[j].innerHTML = doc[i].innerHTML;
                doc[i].innerHTML = a;
            }
        }   
    }
}
function desending(e){
    let orderdList = order().reverse();
    let doc = document.querySelectorAll(".collection");
    // console.log(doc)
    // console.log(doc[1].children[1].children[0])
    for (k = 0; k < orderdList.length; k++) {
        for (j = 0; j < doc.length; j++){
            let d = doc[j].children[1].children[0].textContent;
            if (orderdList[k] === d){
                let a = doc[j].innerHTML;
                doc[j].innerHTML = doc[k].innerHTML;
                doc[k].innerHTML = a;

                // console.log(doc[1].children[1])
                // console.log(doc)
            }
        }
    }   
}