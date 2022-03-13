import postData from './postData.js';

const signUp = document.querySelector('#sign-up');
signUp.addEventListener('submit', (e) => {
  console.log(e.target.username.value.trim());
  e.preventDefault();
  const username = e.target.username.value.trim();
  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();
  const repeatPassword = e.target.repeatPassword.value.trim();
  console.log({
    username, email, repeatPassword, password,
  });
  postData({
    username, email, repeatPassword, password,
  }, '/sign-up');
});
