const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
// stop the default of submit in the form

console.log(firstName.value.length);
form.addEventListener('submit', e => {
    // const error = () => {
    //     firstName.closest('.input').classList.add('error');
    //     e.preventDefault();
    // }
    if (firstName.value.length === 0) {
        firstName.closest('.input').classList.add('error');
        e.preventDefault();
    } else {
        firstName.closest('.input').classList.remove('error');
    }
    if (lastName.value.length === 0) {
        lastName.closest('.input').classList.add('error');
        e.preventDefault();
    } else {
        lastName.closest('.input').classList.remove('error');
    }
    if (password.value.length === 0) {
        password.closest('.input').classList.add('error');
        e.preventDefault();
    } else {
        password.closest('.input').classList.remove('error');
    }
    if (email.value.length === 0) {
        email.closest('.input').classList.add('error');
        e.preventDefault();
    } else {
        email.closest('.input').classList.remove('error');
    }

})