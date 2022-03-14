import postData from './postData.js';

const login = document.querySelector('#log-in');
login.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = e.target.username.value.trim();
  const password = e.target.password.value.trim();
  console.log(username, password);
  postData({ username, password }, '/log-in')
    .then((res) => res.json()).catch((err) => console.log(err));
});
