// Select all the items that I'm going to use
const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');




// this will validate if the format of an email is correct
const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// stop the form from submitting if any of the inputs is empty
console.log(firstName.value.length);
form.addEventListener('submit', e => {
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
        email.closest('.input').classList.remove('wrong');
        e.preventDefault();
    } else if (!email.value.match(validEmailFormat)) {
        console.log('match')
        email.closest('.input').classList.remove('error');
        email.closest('.input').classList.add('wrong');
        e.preventDefault();

    } else {
        email.closest('.input').classList.remove('error');
        email.closest('.input').classList.remove('wrong');

    }

})