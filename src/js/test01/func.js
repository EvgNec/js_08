import { save, load } from './ls';
const keyLS = 'TODO';
let currentID = 0;
const myInput = document.getElementById('myInput');

function addNewTasks() {
const task = myInput.value.trim();
  console.log("task", task);
}

function createLi(text, isDone = false, id = currentID) {

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
