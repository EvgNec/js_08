const myInput = document.getElementById("myInput");

function addNewTask() {
    const task = myInput.value.trim();
    console.log("task", task)
}

export { addNewTask };