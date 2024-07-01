import { save, load } from './05-ls.js';
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
  addTaskToLocalStorage(task, true);
}

function createLi(text) {
  const liEl = document.createElement('li');
  liEl.textContent = text;
  myUL.appendChild(liEl);
  addCloseButton(liEl);
}
function handleTaskBehaviour({ target }) {
  if (target.nodeName === 'LI') {
    target.classList.toggle('checked');
  } else if (target.classList.contains('close')) {
    target.parentNode.remove();
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
  const currentState = load(keyLS);
  console.log('currentState', currentState);
  if (currentState === undefined) {
    // створюємо масив і додаємо туди перший обєект
    const arr = [];
    arr.push(createTaskObj(text, isDone));
    save(keyLS, arr);
  } else {
    //до існуючого додати новий обєект

    currentState.forEach(el =>
    {
      el.id >= currentID ? currentID = el.id + 1 : currentID = currentID;
    });
    currentState.push(createTaskObj(text, isDone));
    save(keyLS, currentState);

  }
}

function addCloseButton(target) {
  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  target.appendChild(span);
}

export { addNewTasks, handleTaskBehaviour };
