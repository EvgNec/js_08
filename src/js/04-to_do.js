import { addNewTask, handlTaskBehavior } from './04-functions';

const myUL = document.getElementById('myUL');
const addbtn = document.getElementById("addBtn");


addbtn.addEventListener("click", addNewTask);
myUL.addEventListener("click", handlTaskBehavior);





