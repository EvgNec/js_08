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

function handlTaskBehavior({ target }) {
  //  Target.tagName -повертає назву HTML-тега елемента Target
  // Target.nodeName -повертає імя пточного вузла у вигляді строки
  console.log("target.nodename", target);

  if (target.nodeName === "LI") {
    target.classList.toggle("checked");
  }
  else if (target.classList.contains("close")) {
    target.parentNode.remove();
  }
}


export { addNewTask, handlTaskBehavior };
