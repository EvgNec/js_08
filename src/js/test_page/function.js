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
  addTaskToLocalStorage(task);
}

function createLi(text, isDone = false, id = currentID) {
  const liEl = document.createElement('li');
  liEl.textContent = text;
  myUL.appendChild(liEl);
addCloseButton(liEl);
}


function handleTaskBehaviour({ target }) {
  console.log("target.nodeName", target.nodeName);
  if (target.nodeName = 'LI') {
    target.classList.toggle('checked');
   }
}



function createTaskObj(text, isDone = false) {
  return {
    text,
    isDone,
    id: currentID,
  };
}

function addTaskToLocalStorage(text, isDone) {
  const curentState = load(keyLS);
  if (curentState === undefined) {
    save(keyLS, createTaskObj(text, isDone)); 
  }
  else {
    console.log("curentState2", curentState);
            console.log("curentState3", curentState.push(createTaskObj(text, isDone)))
    save(keyLS, curentState.push(createTaskObj(text, isDone))); 
  }
 
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
