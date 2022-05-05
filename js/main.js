let range__input = document.querySelector('.range__input');
let myRange = document.querySelector('.range');
let number = document.querySelector('#number');
let loopOne = document.querySelector('.loopOne');

number.innerHTML = myRange.value;

myRange.oninput = function() {
    number.innerHTML = this.value;
}

loopOne.addEventListener('mousemove', () => {
    let x = myRange.value;
    let color = `linear-gradient(90deg, #333 ${x}%, #ccc ${x}%)`
    myRange.style.background = color;
})

myRange.addEventListener('mousemove', () => {
    let x = myRange.value;
    let color = `linear-gradient(90deg, #333 ${x}%, #ccc ${x}%)`
    myRange.style.background = color;
})