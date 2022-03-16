const modal = document.querySelector('.post-container');
const btn = document.querySelector('#open');
const span = document.querySelector('.close');

btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

span.addEventListener('click', () => {
  modal.style.display = 'none';
});
