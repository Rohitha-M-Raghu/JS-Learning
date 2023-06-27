// retrieve from local storage
// const todoList = [];
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

renderTodoList();

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value || 'NoName Task';

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value || 'No DueDate';
  
  todoList.push({name, dueDate});

  localStorage.setItem("todoList", JSON.stringify(todoList));

  // to clear the input box
  inputElement.value = ''; 

  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class ="delete-todo-button js-delete-todo-button">Delete</button>
      `;

    todoListHTML += html;
    localStorage.setItem("todoList", JSON.stringify(todoList));

  });
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1); 
        renderTodoList();
      });
    });

 }
