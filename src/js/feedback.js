console.log("0");
 import { save, load } from './04-local_storage';
const keyLS = 'feedback-form-state';
const forms = document.querySelector(".feedback-form");
// const forms = document.querySelector("#idd");
const elMail = document.querySelector("input[name=email]");
const elMes = document.querySelector("input[name=message]");

forms.addEventListener("input", () => {console.log("1");});


// function AddLS(e) {
//      console.log("1");
//     console.log(e.currentTarget);
// }