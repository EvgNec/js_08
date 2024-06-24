import { addNewTask } from './04-functions';

const addbtn = document.getElementById("addBtn");
const myUL = document.getElementById("myUL");

addbtn.addEventListener("click", addNewTask);

// function addToDo(e) {
//  console.log("e.target.value", e.target)   
//    const elements = `<li>${e.target.value}</li>`
//     list.insertAdjacentHTML("beforeend", elements);

// }



