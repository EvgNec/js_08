import { save, load } from './04-local_storage';
const localStorageKey = "tasks";

const myInput = document.getElementById('myInput');
const myUL = document.getElementById('myUL');

function addNewTask() {
  const task = myInput.value.trim();
  myInput.value = '';
  if (task === '') {
    alert('Please enter text');
    return;
  }
  createLi(task);
  addTaskToLocalStorage(task)
}

function createLi(text) {
  const liEl = document.createElement('li');
  liEl.textContent = text;
    myUL.appendChild(liEl);
    addCloseButton(liEl);
}
// function createLi(text) {
//    const liEl = `<li>${text}</li>`
//     myUL.insertAdjacentHTML("beforeend", liEl);
// }

function addCloseButton(target) { 
    const span = document.createElement('span');
    const txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt); 
    target.appendChild(span);
}

function handlTaskBehavior({ target }) {
  //  Target.tagName -повертає назву HTML-тега елемента Target
  // Target.nodeName -повертає імя пточного вузла у вигляді строки
  if (target.nodeName === "LI") {
    target.classList.toggle("checked");}
  else if (target.classList.contains("close")) {
    target.parentNode.remove();}
}

function createTaskObj(text, isDone) {
  return {
    text, isDone, id: 0
  }
}

function addTaskToLocalStorage(text, isDone =  false) {
  const currentState = load(localStorageKey);
  if (currentState === undefined) {
    //створюємо масив і додаємо туди перший об'єкт задачі
  } else {
    //до вже існуючого масиву додати новий об'єкт задачі
  }
}
export { addNewTask, handlTaskBehavior };
