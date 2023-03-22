const buttonPlus = document.querySelector('#btnPlus');
const buttonMinus = document.querySelector('#btnMinus');
const buttonDegree = document.querySelector('#btnDgree');
const buttonDevide = document.querySelector('#btnDvide');
const result = document.querySelector('.result')
// const input = document.querySelector('#input');

let num = 0;
result.innerText = num;
buttonPlus.addEventListener('click', () => {
    if (num < 1000) {
        num += 1;
        result.innerText = num;
    } else {
        buttonPlus.disabled = true;
    }
});

buttonMinus.addEventListener('click', () => {
    if (num > 0) {
        num -= 1;
        result.innerText = num;
        buttonPlus.disabled = false;
    } else {
        alert('Hey! Stob it')
    }
});

//делать каунтер, добавить умножение и деление на result

buttonDegree.addEventListener('click', () => {
    result.innerText = num * num;
})

buttonDevide.addEventListener('click', () => {
    result.innerText = num / 2;
})




















// input.addEventListener('input', (event) => {
//     console.log(event.target.value)
// });



console.log(window.location);