import { addNewTasks, handleTaskBehaviour, fillTaskList } from './05-func';

const addBtn = document.getElementById('addBtn');
const myUL = document.getElementById('myUL');


addBtn.addEventListener('click', addNewTasks);
myUL.addEventListener('click', handleTaskBehaviour);
window.addEventListener('DOMContentLoaded', fillTaskList);