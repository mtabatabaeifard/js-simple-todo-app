import {handleCreateNewTodo} from "./modules/controller/handleCreateTodo.js";
import { toastify } from "./modules/components/toastify.js";


const submitTodoButton = document.getElementById("submit");

submitTodoButton.addEventListener("click", handleCreateNewTodo);