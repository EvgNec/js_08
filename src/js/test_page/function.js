import { save, load } from './local_storage';
const keyLS = 'TODO';
let currentID = 0;
const myInput = document.getElementById('myInput');
const myUL = document.getElementById('myUL');

function addNewTasks() {
const task = myInput.value.trim();
  if (task === '') { 
    alert('Please enter');
    return;
  }
  createLi(task);
  myInput.value = '';
}

function createLi(text, isDone = false, id = currentID) {
  const liEl = document.createElement('li');
  liEl.textContent = text;
  myUL.appendChild(liEl);
addCloseButton(liEl);
}


function handleTaskBehaviour({ target }) {

}

function createTaskObj(text, isDone = false) {
  return {

  };
}

function addTaskToLocalStorage(text, isDone) {

}

function addCloseButton(target) {
  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  target.appendChild(span);
}

function fillTaskList() {

}

export { addNewTasks, handleTaskBehaviour, fillTaskList };
