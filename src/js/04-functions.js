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
  const liEl = document.createElement('li');
  liEl.textContent = text; 
  liEl.dataset.id = id;
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


  //  Target.tagName -повертає назву HTML-тега елемента Target
  // Target.nodeName -повертає імя пточного вузла у вигляді строки
  if (target.nodeName === 'LI') {
    target.classList.toggle('checked');
    const taskIndex = currentState.findIndex((task) => Number(task.id) === Number(target.dataset.id));
    currentState[taskIndex].isDone = !currentState[taskIndex].isDone;
  } else if (target.classList.contains('close')) {
    target.parentNode.remove();
    const taskIndex = currentState.findIndex((task) => Number(task.id) === Number(target.parentNode.dataset.id));
    currentState.splice(taskIndex, 1);
  }
  save(localStorageKey, currentState);
}

function createTaskObj(text, isDone) {
  return {
    text,
    isDone,
    id: currentID,
  };
}

function addTaskToLocalStorage(text, isDone = false) {
  const currentState = load(localStorageKey);
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

function fillTaskList() {
  const currentState = load(localStorageKey);
  if (currentState !== undefined) {
    currentState.forEach(({ text, isDone, id }) => {
      createLi(text, isDone, id)
      currentID = id + 1;
    });
    // currentID =
    //   currentState.length === 0
    //     ? 0
    //     : currentState[currentState.length - 1].id + 1;
  }
}
export { addNewTask, handlTaskBehavior, fillTaskList };
