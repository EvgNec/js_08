import { addNewTasks } from './05-func';

const addBtn = document.getElementById('addBtn');

const myUL = document.getElementById('myUL');

addBtn.addEventListener('click', addNewTasks);