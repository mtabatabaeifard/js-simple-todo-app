import { toastify } from "../components/toastify.js";

//query to DOM for getting elements
const todoTitle = document.getElementById("title");
const todoDesc = document.getElementById("desc");
const mainList = document.getElementById("main");

// handle add new todo
export const handleCreateNewTodo = (event) => {
  //prevent to rerender page by form
  event.preventDefault();
  //validate todo form
  if (!todoTitle.value) {
    // undefined or ''
    return toastify("please enter a valid title",{
        time: 1000,
        type: "warn",
      })
    ;
  }
  console.log("sumit new todo", { event });
  // create an object from todo title and desc
  const newTodo = {
    title: todoTitle.value,
    desc: todoDesc.value,
  };
  // create a list item for new todo
  const listItem = document.createElement("li");
  listItem.className = "list-item";
  //   listItem.setAttribute('class', 'list-item');
  // JSS -> javaScriptStyles
  const todoTitleHeading = document.createElement("h3");
  todoTitleHeading.style.backgroundColor = "tomato";
  todoTitleHeading.innerHTML = newTodo.title;
  const todoDescPara = document.createElement("li");
  todoDescPara.innerHTML = newTodo.desc;
  // put h3 and p into our list item
  listItem.appendChild(todoTitleHeading);
  listItem.appendChild(todoDescPara);
  //put action buttons to our list item
  const todoActions = `<div>
      <button>DEL</button>
      <button>EDIT</button>
      <button>UPDATE</button>
  </div>`;

  listItem.innerHTML += todoActions;
  // put our list item into main ul
  mainList.appendChild(listItem);
  //   mainList.innerHTML += newTodoListItem;
};
