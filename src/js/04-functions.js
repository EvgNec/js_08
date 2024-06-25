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
}
// function createLi(text) {
//    const liEl = `<li>${text}</li>`
//     myUL.insertAdjacentHTML("beforeend", liEl);
// }

export { addNewTask };
