const numberInput = document.querySelector('.number__input');
const numberBtn = document.querySelector('.number__btn');
const numberOut = document.querySelector('.number__out');

const randomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const random = randomNumber(1, 100);

const guessNum = (numInput) => {
    if(numInput > random) return 'Ваше число больше заданного';
    else if(numInput < random) return 'Ваше число меньше заданного';
    else return 'Вы угадали';
}

const outGuessNum = () => {
    numberOut.textContent = guessNum(+numberInput.value);

}


numberBtn.addEventListener('click', outGuessNum)