const squareBtn = document.querySelector('.square__btn');
const rectangleBtn = document.querySelector('.rectangle__btn');
const circleBtn = document.querySelector('.circle__btn');
const triangleBtn = document.querySelector('.triangle__btn');

const squareArea = a => a ** 2;
const perimeterSquare = a => 4 * a;

const areaRectangle = (a, b) => a * b;
const perimeterRectangle = (a, b) => 2 * (a + b);

const areaCircle = r => Math.PI * r ** 2;
const circumference = r => 2 * Math.PI * r;

const areaTriangle = (a, b, c) => {
    const s = (a + b + c) / 2;
    return Math.sqrt((s * (s - a) * (s - b) * (s - c)));
}

const outputArea = () => {
    const squareInput = document.querySelector('.square__input');
    const squareOutputText = document.querySelectorAll('.square__output-text');
    squareOutputText[0].textContent += `${perimeterSquare(+squareInput.value)}`;
    squareOutputText[1].textContent += `${squareArea(+squareInput.value)}`;
}

const outputRectangle = () => {
    const rectangleInput = document.querySelectorAll('.rectangle__input');
    const rectangleOutputText = document.querySelectorAll('.rectangle__output-text');
    rectangleOutputText[0].textContent += `${perimeterRectangle(+rectangleInput[0].value, +rectangleInput[1].value)}`;
    rectangleOutputText[1].textContent += `${areaRectangle(+rectangleInput[0].value, +rectangleInput[1].value)}`;
}

const outputCircle = () => {
    const circleInput = document.querySelector('.circle__input');
    const circleOutputText = document.querySelectorAll('.circle__output-text');
    circleOutputText[0].textContent += `${Math.floor(areaCircle(+circleInput.value))}`;
    circleOutputText[1].textContent += `${Math.floor(circumference(+circleInput.value))}`;
}


const outputTriangle = () => {
    const triangleInput = document.querySelectorAll('.triangle__input');
    const triangleOutputText = document.querySelector('.triangle__output-text');
    let a = +triangleInput[0].value, 
        b = +triangleInput[1].value,
        c = +triangleInput[2].value;
    triangleOutputText.textContent = `${Math.round(areaTriangle(a, b, c))}`;
}

squareBtn.addEventListener('click', outputArea);
rectangleBtn.addEventListener('click', outputRectangle);
circleBtn.addEventListener('click', outputCircle);
triangleBtn.addEventListener('click', outputTriangle);
