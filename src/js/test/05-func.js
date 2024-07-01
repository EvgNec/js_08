import { save, load } from './05-ls.js';
const keyLS = "TODO";


const myInput = document.getElementById('myInput');
const myUL = document.getElementById('myUL');

function addNewTasks() {
  const task = myInput.value.trim();
  myInput.value = '';
  if (task === '') {
    alert('Please enter text');
    return;
  }
  createLi(task);
  addTaskToLocalStorage(text);
 }
 
function createLi(text) {
const liEl = document.createElement('li');
  liEl.textContent = text;
  myUL.appendChild(liEl);
  addCloseButton(liEl);
}
function handleTaskBehaviour({ target }) {
  if (target.nodeName === "LI") {
    target.classList.toggle("checked");
  } else if (target.classList.contains("close")) {
    target.parentNode.remove();
    
  }
}

function createTaskObj(text, isDone=false) {
  return {
    text,
    isDone,
    id:0
}
}
 
function addTaskToLocalStorage(text, isDone) {
  const currentState = load(keyLS);


  createTaskObj(task, true);
  

 }


function addCloseButton(target) {
  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  target.appendChild(span);
}


export { addNewTasks, handleTaskBehaviour };