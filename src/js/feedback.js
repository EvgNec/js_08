import lodash from 'lodash';
const keyLS = 'feedback-form-state';
const forms = document.querySelector(".feedback-form");
// const forms = document.querySelector("#idd");
const elMail = document.querySelector("input[name=email]");

const elMes = document.querySelector("input[name=message]");


forms.addEventListener("input",  lodash.throttle(AddLS,500));
forms.addEventListener("submit", onSubmit);

function AddLS(e) {
    const tar = e.target.value;
    console.log("dataset", e.target.dataset)
    console.log("e.target", e.target)
    console.log(tar);
    console.log("elMail", elMail.value)
    console.log("elMes", elMes)

}

function setLocalStorageData(e) {

};

function onSubmit(e) {
}