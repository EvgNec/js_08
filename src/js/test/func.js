import { save, load } from './ls.js';
const keyLS = 'TODO';
let currentID = 0;
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
  addTaskToLocalStorage(task);
}

function createLi(text, isDone = false, id = currentID) {
  const liEl = document.createElement('li');
  liEl.textContent = text;
  liEl.dataset.id = id;
  if (isDone) liEl.classList.add('checked');
  myUL.appendChild(liEl);
  addCloseButton(liEl);
}
function handleTaskBehaviour({ target }) {
  const currentState = load(keyLS);
  if (target.nodeName === 'LI') {
    target.classList.toggle('checked');
    const taskIndex =
      currentState.findIndex(task => Number(task.id) === Number(target.dataset.id))
    currentState[taskIndex].isDone = !currentState[taskIndex].isDone;    
  } else if (target.classList.contains('close')) {
    target.parentNode.remove();
     const taskIndex =
      currentState.findIndex(task => Number(task.id) === Number(target.parentNode.dataset.id))
    currentState.splice(taskIndex, 1);
  }
  save(keyLS, currentState);
}

function createTaskObj(text, isDone = false) {
  return {
    text,
    isDone,
    id: currentID,
  };
}

function addTaskToLocalStorage(text, isDone) {
  const currentState = load(keyLS);
  console.log('currentState', currentState);
  if (currentState === undefined) {
    // створюємо масив і додаємо туди перший обєект
    const arr = [];
    arr.push(createTaskObj(text, isDone));
    save(keyLS, arr);
  } else {
    //до існуючого додати новий обєект
    currentState.push(createTaskObj(text, isDone));
    save(keyLS, currentState);
  }
    currentID += 1;
}

function addCloseButton(target) {
  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  target.appendChild(span);
}

function fillTaskList() {
  const currentState = load(keyLS);
  if (currentState!==undefined) {
    currentState.forEach(({ text, isDone, id }) => {
      createLi(text, isDone, id);
      currentID = id+1;
    });
    
  }
}

export { addNewTasks, handleTaskBehaviour, fillTaskList };
