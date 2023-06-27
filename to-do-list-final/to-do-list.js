// retrieve from local storage
// const todoList = [];
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

renderTodoList();

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({name, dueDate});

  localStorage.setItem("todoList", JSON.stringify(todoList));

  // to clear the input box
  inputElement.value = ''; 

  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = '';

  for(let i=0; i<todoList.length; ++i) {
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1); 
        renderTodoList();
      " class ="delete-todo-button">Delete</button>
      `;

    todoListHTML += html;
    localStorage.setItem("todoList", JSON.stringify(todoList));

  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}