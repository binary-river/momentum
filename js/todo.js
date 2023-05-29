const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleSubmit(info){
    info.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = { 
        text : newTodo ,
        id   : Date.now()
    };
    todoInput.value = "";
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function deleteTodo(event){
    const li = event.target.parentNode;
    console.log(li.id);
    todos = todos.filter( element => element.id !== parseInt(li.id) );

    saveTodos();
    li.remove();
}

function paintTodo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerHTML = todo.text;

    const button  = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function loadTodos(){
    const localTodo = localStorage.getItem(TODOS_KEY);
    if( localTodo === null) return;

    todos = JSON.parse(localTodo);
    todos.forEach(paintTodo);
}

todoForm.addEventListener("submit", handleSubmit);
loadTodos();
