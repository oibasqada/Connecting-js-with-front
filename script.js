const button = document.querySelector('button');
const input = document.querySelector('#input');
    let num = 0;
button.addEventListener('click', () => {

    num += 1;
    console.log(num);
});

input.addEventListener('input', (event) => {
    console.log(event.target.value)
});



console.log(window.location);