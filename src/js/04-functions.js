import { save, load } from './04-local_storage';
const localStorageKey = 'tasks';

const myInput = document.getElementById('myInput');
const myUL = document.getElementById('myUL');

let currentID = 0;

function addNewTask() {
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
  console.log("currentID", currentID);
  const liEl = document.createElement('li');
  liEl.textContent = text; 
  console.log("liEl.dataset.id1", liEl.dataset.id);
  liEl.dataset.id = id;
  console.log("liEl.dataset.id2", liEl.dataset.id)
  if(isDone) liEl.classList.add("checked");
  myUL.appendChild(liEl);
  addCloseButton(liEl);
}
// function createLi(text) {
//    const liEl = `<li>${text}</li>`
//     myUL.insertAdjacentHTML("beforeend", liEl);
// }

function addCloseButton(target) {
  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  target.appendChild(span);
}

function handlTaskBehavior({ target }) {
  const currentState = load(localStorageKey);
  console.log("currentState", currentState)

  //  Target.tagName -повертає назву HTML-тега елемента Target
  // Target.nodeName -повертає імя пточного вузла у вигляді строки
  if (target.nodeName === 'LI') {
    target.classList.toggle('checked');
    const taskIndex = currentState.findIndex(task => task.id = target.dataset.id);
          console.log("taskIndex", taskIndex)
  } else if (target.classList.contains('close')) {
    target.parentNode.remove();
  }
}

function createTaskObj(text, isDone) {
  return {
    text,
    isDone,
    id: 0,
  };
}

function addTaskToLocalStorage(text, isDone = false) {
  const currentState = load(localStorageKey);
  console.log('currentState', currentState);
  if (currentState === undefined) {
    //створюємо масив і додаємо туди перший об'єкт задачі
    const arr = [createTaskObj(text, isDone)];
    save(localStorageKey, arr);
  } else {
    //до вже існуючого масиву додати новий об'єкт задачі
    currentState.push(createTaskObj(text, isDone));
    save(localStorageKey, currentState);
  }
  currentID += 1;
}
export { addNewTask, handlTaskBehavior };
