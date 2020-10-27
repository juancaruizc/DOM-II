// Your code goes here

const logo = document.querySelector('.logo-heading');
const nav = document.querySelector('nav.nav');
const header = document.querySelector('header');
const busImg = document.querySelector('.intro img');
const subHeaders = document.querySelector('h2');
const paragraphs = document.querySelector('p');
const signMeUpButton = document.querySelector('div.btn');
const h4SubHeaders = document.querySelectorAll('h4');
const bottomImg = document.querySelector('.content-destination img');
const mapImg = document.querySelector('.img-content img');
const footer = document.querySelector('footer.footer');

logo.addEventListener('mouseover', (e) => {
  logo.style.color = 'purple';
});

logo.addEventListener('mouseout', (e) => {
  logo.style.color = 'black';
});

document.addEventListener('keydown', (e) => {
  if (event.key === 'Escape') {
    subHeaders.textContent = 'OUUCHH!!! :(';
  }
});

nav.addEventListener('dblclick', (e) => {
  nav.style.backgroundColor = 'green';
  nav.addEventListener('mouseout', (e) => {
    nav.style.backgroundColor = 'white';
  });
});

window.addEventListener('load', (e) => {
  console.log('Hello World!');
});

// Array.from(h4SubHeaders).forEach() => {
//     h4SubHeaders.addEventListener('mousemover', (e) => {
//         h4SubHeaders.style.color = 'brown';
//       });
// }
