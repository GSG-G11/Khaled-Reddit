import postData from './postData.js';

const signUp = document.querySelector('#sign-up');
signUp.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = e.target.username.value.trim();
  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();
  const repeatPassword = e.target.repeatpassword.value.trim();
  postData({
    username, email, repeatPassword, password,
  }, '/sign-up')
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res === 'AUTH') {
        window.location.href = '/user';
      }
    });
});
