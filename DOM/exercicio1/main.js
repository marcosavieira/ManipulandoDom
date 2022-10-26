const italic = document.querySelector('.italic')
const bold = document.querySelector('.bold')
const underline = document.querySelector('.underline')
const mais = document.querySelector('#mais')
const size = document.querySelector('#font-size')
const menos = document.querySelector('#menos')
const red = document.querySelector('#red')
const blue = document.querySelector('#blue')
const purple = document.querySelector('#purple')
const black = document.querySelector('#black')
const lorem = document.querySelector('#lorem')

italic.addEventListener('click', function(event) {
  lorem.style.fontStyle = 'italic';
});

bold.addEventListener('click', function(event) {
  lorem.style.fontWeight = 'bold'
});

underline.addEventListener('click', function(event) {
  lorem.style.textDecoration = 'underline'
});

red.addEventListener('click', function(event){
  lorem.style.color = 'red';
} )

blue.addEventListener('click', function(event){
  lorem.style.color = 'blue';
})

purple.addEventListener('click', function(event) {
  lorem.style.color = 'purple';

})

black.addEventListener('click', function(event) {
  lorem.style.color = 'black';

})

lorem.style.fontSize = '16px'

let sizeFont = 16;
// Valor de incremento ou decremento, equivale a 1px do valor do lorem(p)
let maisMenos = 1;

// Evento de click para aumentar a fonte
mais.addEventListener('click', function(event) {
    sizeFont = sizeFont + maisMenos;
    lorem.style.fontSize = sizeFont + 'px';
    size.textContent = sizeFont;
});

// Evento de click para diminuir a fonte
menos.addEventListener('click', function(event) {
  sizeFont = sizeFont - maisMenos;
  lorem.style.fontSize = sizeFont + 'px';
  size.textContent = sizeFont;
});



