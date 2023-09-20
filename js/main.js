const todoList = document.querySelector(".todo__list");
const todoInp = document.querySelector(".todo__inp");
const todoBtn = document.querySelector(".todo__btn");

for (let i = 0; i < todoList.children.length; i++) {
  todoList.children[i].addEventListener("click", createCheckedTask);
  const span = document.createElement("span");
  span.innerHTML = "X";
  todoList.children[i].appendChild(span);
  span.classList.add("todo__closeBtn");
}
const closeBtn = document.querySelectorAll(".todo__closeBtn");
for (i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", removeTask);
}

function createCheckedTask() {
  this.classList.toggle("checked");
}
function removeTask() {
  // this.parentElement.style.display = 'none'
  this.parentElement.remove(); //потому что созданный span в li находится
}

todoBtn.addEventListener("click", createTask);

function createTask() {
  if (todoInp.value) {
    const newToDoItem = document.createElement("li");
    newToDoItem.classList.add("todo__item");
    newToDoItem.innerHTML = todoInp.value;
    todoList.appendChild(newToDoItem);
    todoInp.value = "";
    const span = document.createElement("span");
    span.innerHTML = "X";
    newToDoItem.appendChild(span);
    span.classList.add("todo__closeBtn");
    span.addEventListener("click", removeTask);
    newToDoItem.addEventListener("click", createCheckedTask);
    newToDoItem.setAttribute("contenteditable", "true");
  }
}
