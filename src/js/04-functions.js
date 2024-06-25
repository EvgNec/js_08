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

function handlTaskBehavior({ target}) {
    console.log("target", target)
    
}


export { addNewTask, handlTaskBehavior };
