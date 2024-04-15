// Function to show the To Do List popup
function showTodoPopup() {
    const todoPopup = document.getElementById('todoPopup');
    if (todoPopup.style.display === 'none' || todoPopup.style.display === '') {
        todoPopup.style.display = 'block';
    } else {
        todoPopup.style.display = 'none';
    }
}

// Function to close the To Do List popup
function closeTodoPopup() {
    const todoPopup = document.getElementById('todoPopup');
    todoPopup.style.display = 'none';
}

const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Add some text to create a task");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = ''; // Clear the input box after adding task
        saveData();
    }
}

// Event listener for "Enter" key
inputBox.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("todo-items", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("todo-items");
}

showTask();
