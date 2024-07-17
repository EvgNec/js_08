import lodash from 'lodash';
const keyLS = 'feedback-form-state';
const forms = document.querySelector(".feedback-form");
// const forms = document.querySelector("#idd");
const elMail = document.querySelector("input[name=email]");
const elMes = document.querySelector("textarea[name=message]");


forms.addEventListener("input",  lodash.throttle(AddLS,500));
forms.addEventListener("submit", onSubmit);
const data = localStorage.getItem(keyLS);
console.log("data", data)
prevLS();

function AddLS(e) {
    const tar = e.target.value;
  const data = {
  Mail: elMail.value,
  Mes: elMes.value,
    };
    localStorage.setItem(keyLS, JSON.stringify(data));
    // console.log(tar);
    // console.log("elMail", elMail.value)
    // console.log("elMes", elMes.value)

}

function prevLS() {
    if (data) {
     console.log("e.target.value") 
    } else {
        console.log("Null") 
}
};

function saveToLS(e) {

};

function onSubmit(e) {
}