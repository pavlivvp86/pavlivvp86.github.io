let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};

let message = document.querySelector('.email-info');
let button = document.querySelector('.email-button');
let email = document.querySelector('.subscription-email');

button.onclick = function() {
  message.textContent = 'Привіт!!! Ваша пошта: '+ email.value + ' занесена  в нашу базу для розсилки. Дякую Вам!!!';
}