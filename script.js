function validateEmailorPassword() {
const userName = document.querySelector('.js-email-input');
const password = document.querySelector('.js-password-input');
const emailError = document.querySelector('.js-email-error');
const passwordError = document.querySelector('.js-password-error');
const emailFormat = document.querySelector('.js-email-format')
const passwordLength = document.querySelector('.js-password-short');

const user = userName.value.trim();
const pass = password.value;

emailError.innerHTML = '';
passwordError.innerHTML = '';
emailFormat.innerHTML = '';
passwordLength.innerHTML = '';

if(!user && !pass) {
    emailError
    .innerHTML ='Please enter your email or username';
    passwordError
    .innerHTML ='Please enter your password';
    return;
}

if(!user) {
    emailError
    .innerHTML ='Please enter your email or username';
    return;
}

if (!pass) {
    passwordError
    .innerHTML ='Please enter your password';
    return;
}
/* This is to check if the email ends with @gmail.com*/

if(!user.endsWith('@gmail.com')) {
emailFormat.innerHTML = 'Invalid email address';
}

if (pass.length < 6) {
     passwordLength.innerHTML = 'Password too short'
     return;
}
alert('Login successfully');
}
