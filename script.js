const buttonPlus = document.querySelector('#btnPlus');
const buttonMinus = document.querySelector('#btnMinus');
const result = document.querySelector('.result')
// const input = document.querySelector('#input');

let num = 0;
result.innerText = num;
buttonPlus.addEventListener('click', () => {
    num += 1;
    result.innerText = num;

    if (num > 10) {
        num -= 1
        result.innerText = num;
        // buttonMinus.disabled = true;
    } else if (num > 10) {
        return buttonMinus.disabled = true;
    }
});

buttonMinus.addEventListener('click', () => {
    num -= 1;
    result.innerText = num;

    if (num < 0) {
        num += 1
        result.innerText = num;
        // buttonMinus.disabled = true;
    } else if (num < 0) {
        return buttonMinus.disabled = true;
    }
});

    // if (num > 10) {
    //     num -= 1
    //     result.innerText = num;
    //     // buttonMinus.disabled = true;
    // } else if ( num < 0) {
    //     num += 1
    //     result.innerText = num;
    // }
// input.addEventListener('input', (event) => {
//     console.log(event.target.value)
// });



console.log(window.location);