// Using your index.js file, create event listeners of at least 10 different types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
// mouseover
// keydown
// wheel
// load
// focus
// resize
// scroll
// select
// dblclick
// drag / drop
// Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

//  Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
//  Stop the navigation items from refreshing the page by using preventDefault()



//mouseover - 1

let logo = document.querySelector('.logo-heading')

logo.addEventListener('mouseover', (event) => {
    logo.style.color = 'red';
})

//mouseout - 2

let logo2 = document.querySelector('.logo-heading')

logo2.addEventListener('mouseout', (event) => {
    logo2.style.color = 'black';
})

// dblclick - 3

let nav = document.querySelector('nav')

function eventListener2 (event) {
    nav.style.background = 'blue' ;
}
nav.addEventListener('dblclick', eventListener2)

//wheel - 4

let htwoChanger = document.querySelector('h2')

function eventListener3 (event) {
    htwoChanger.style.fontSize = '5px' ;
}
htwoChanger.addEventListener('wheel', eventListener3)

//mousemove - 5

let textMover = document.querySelector('p');
textMover.addEventListener('mousemove', (event) => {
    textMover.style.fontWeight = 'bold';
});

//keypress - 6

let key= document.querySelector('.destination');

function keypresser (event) {
    key.textContent += `${event.code}`;
}
document.addEventListener('keypress', key);

// load - 7

window.addEventListener('load', (event) => {
    console.log("Hello World!")
});

//keydown - 8

let introh2 = document.querySelector ('.intro h2')

document.addEventListener ('keydown', function (event){
    if(event.key === 'e') {
        introh2.textContent = 'You pressed e'
    } 
})

//keyup - 9

let h2 = document.querySelector ('h2')

document.addEventListener ('keyup', function (event){
    if(event.key === 'b') {
        h2.textContent = 'You pressed b!!'
    } 
})

//animationstart - 10

let animated = document.querySelector('h2');

animated.addEventListener('animationstart', () => {
  console.log('Animation started');
});



