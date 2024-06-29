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
 }
function createLi(text) {
const liEl = document.createElement('li');
  liEl.textContent = text;
  myUL.appendChild(liEl);
  addCloseButton(liEl);
}
function handleTaskBehaviour({ target }) {
  console.log("target", target)
  if (target.nodeName === "LI") {
    target.classList.togle("checked");
  } else if (target.className === "close") {
    console.log("target.className", target.className)
    
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