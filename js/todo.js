const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter( (toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    
}
function saveToDOs() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    
    const button = document.createElement("button");
    const span = document.createElement("span");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    span.innerText = newTodoObj.text;
    document.querySelector("#todo-list").appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const paresdToDos = JSON.parse(savedToDos);
    toDos = paresdToDos;
    paresdToDos.forEach(paintToDo);
}

