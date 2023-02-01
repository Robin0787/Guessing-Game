var attempts = 0;
var remainingAttempts = 5;
var wons = 0;
var losts = 0;

const container = document.querySelector('.container');
const form = container.querySelector('form');
const input = container.querySelector('input');
const button = container.querySelector('button');
const p1 = container.querySelector('#p1');
const p2 = container.querySelector('#p2');
const p3 = container.querySelector('#p3');

button.disabled = true;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    attempts ++;
    remainingAttempts --;
    if( attempts == 5){
        input.disabled = true;
        button.disabled = true;
        checkResult(input.value);
    } else {
        checkResult(input.value);
    };
    p2.innerHTML = `Remaining Attemts : ${remainingAttempts}`;
    input.value = '';
    button.disabled = true;
    input.focus();
});

input.addEventListener('input', function () {
    if(this.value === "") {
        button.disabled = true;
    }else {
        button.disabled = false;
    }
})

function checkResult (value) {
    const random = randomNum(5);

    if(value == random){
        wons ++;
        p1.innerHTML = 'You Have Won!'
        p1.classList.remove('wrong');
        p1.classList.add('right');
    } else {
        losts ++;
        p1.innerHTML = 'You Have Lost. The Random Number Was : ' + random;
        p1.classList.remove('right');
        p1.classList.add('wrong');
    };
    p3.innerHTML = `Wons : ${wons}, Losts : ${losts}`;
    p3.classList.add('largeText');
};


function randomNum (limit) {
    return Math.ceil(Math.random() * limit);
};