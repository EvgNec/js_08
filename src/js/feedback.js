import lodash from 'lodash';
const keyLS = 'feedback-form-state';
const forms = document.querySelector('.feedback-form');
const elMail = document.querySelector('input[name=email]');
const elMes = document.querySelector('textarea[name=message]');

forms.addEventListener('input', lodash.throttle(AddLS, 500));
forms.addEventListener('submit', onSubmit);
const data = localStorage.getItem(keyLS);
prevLS();

function AddLS(e) {
  const data = {
    Mail: elMail.value,
    Mes: elMes.value,
  };
  localStorage.setItem(keyLS, JSON.stringify(data));
}

function prevLS(e) {
  if (data) {
    const ls = JSON.parse(data);
    console.log('ls', ls);
    elMail.value = ls.Mail;
    elMes.value = ls.Mes;
  }
}

function saveToLS(e) {}

function onSubmit(e) {
    e.preventDefault();
  console.log("elMail.value", elMail.value);
  console.log("elMes.value", elMes.value);
  localStorage.removeItem(keyLS); 
elMail.value = '';
elMes.value = '';


}
