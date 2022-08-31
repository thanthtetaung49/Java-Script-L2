var getform = document.getElementById("form");
var gettextbox = document.getElementById("textbox");
var getul = document.getElementById("list-group");

getform.addEventListener("submit", function (e) {
    
    // console.log("hi");
    
    addnew();
    
    e.preventDefault();
});

function addnew(todo) {
    
    var todotext = gettextbox.value;
    // console.log(todotext);
    
    // come from local storage
    if (todo) {
        
        todotext = todo.text;
    } // come form local storage
    
    if (todotext) {
        
        const li = document.createElement("li");

        // console.log(todotext);
        // console.log(todo.done);

        // come from local storage
        if (todo && todo.done) {
            li.classList.add("done");
        } // comefrom local storage

        // come from textarea
        li.appendChild(document.createTextNode(todotext));
        getul.appendChild(li);
        
        gettextbox.value = "";
        
        // console.log(li);
        
        updatelocalstorage(); // come from textarea

            // left click
        li.addEventListener("click", function () {
            
            this.classList.toggle("done");
            updatelocalstorage();
        });

            // right click
        li.addEventListener("contextmenu", function () {
            
            this.remove();
            updatelocalstorage();
        });
    }
}

function updatelocalstorage() {
    
    var getalllis = document.querySelectorAll("li");
    // console.log(getalllis);
    
    var todos = [];
    
    getalllis.forEach(function (getallli) {
        
        // console.log(getallli);
        todos.push({
            text: getallli.textContent,
            done: getallli.classList.contains("done")
        });
        
    });
    
    // console.log(todos);
    
    localStorage.setItem("todos", JSON.stringify(todos));
}

var getlstodos = JSON.parse(localStorage.getItem("todos"));

if (getlstodos) {
    
    getlstodos.forEach(function (getlstodo) {
        
        // console.log(getlstodo);
        // console.log(getlstodo.text);
        
        addnew(getlstodo);
    });
}

// console.log(getlstodos);
// 31TD
