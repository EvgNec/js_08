const myInput = document.getElementById('myInput');
const myUL = document.getElementById('myUL');

function addNewTasks() {
  const task = myInput.value.trim();

  if (task === '') {
    alert('Please enter text');
    return;
  }
  createLi(task);
    myInput.value = '';
 }

function createLi(text) {
const liEl = document.createElement('li');
  liEl.textContent = text;
  myUL.appendChild(liEl);
}

function addCloseButton(target) {
  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  target.appendChild(span);
}


export { addNewTasks };