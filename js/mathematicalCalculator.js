const equationBtn = document.querySelector('.equation__btn');
const pythagorasBtn = document.querySelector('.pythagoras__btn');
const dividersBtn = document.querySelector('.dividers__btn');
const commonBtn = document.querySelector('.common__btn');

const quadraticEquation = (a, b, c) => {
    const D = b ** 2 - 4 * a * c;
    if(D < 0) return 'Ответа нет';
    else if(D > 0) {
        const x1 = (-b + Math.sqrt(D)) / 2 * a;
        const x2 = (-b - Math.sqrt(D)) / 2 * a;
        return `x1 = ${Math.round(x1)} \n x2 = ${Math.round(x2)}`;
    } else {
        const x = -b / (2 * a);
        return `x = ${Math.round(x)}`
    }
}

const pythagoreanTriple = (a, b, c) => {
    const max = Math.max(a, b, c);
    if(max == a) {
        return (b ** 2 + c ** 2) == a ** 2 ? 'Является' : 'Не является';
    } else if(max == b) {
        return (a ** 2 + c ** 2) == b ** 2 ? 'Является' : 'Не является';
    } else {
        return (a ** 2 + b ** 2) == c ** 2 ? 'Является' : 'Не является';
    }
}

const numberDivisors = num => {
    const result = [];
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) result.push(i);
    }

    return result;
}

const divisors = (arr1, arr2) => {
    const result = [];
    arr1.map(item => {
        if(arr2.includes(item)) result.push(item);
    })

    return result;
}

const commonDivisors = (num1, num2) => {
    let div1 = numberDivisors(num1);
    let div2 = numberDivisors(num2);
    return divisors(div1, div2);
}

const smallestDivisor = (num1, num2) => {
    let min = Math.min(num1, num2);
    // if(num1 > num2) {
    //     for(let i = 2; i < num1; i++) {
    //         if(num1 % i == 0 && num2 % i == 0) return i;
    //     }
    // } else {
    //     for(let i = 2; i < num2; i++) {
    //         if(num1 % i == 0 && num2 % i == 0) return i;
    //     }
    // }
    for(let i = min; i > 0; i--) {
        if(num1 % i == 0 && num2 % i == 0) return i;
    }
}

const outputEquation = () => {
    const equationInput = document.querySelectorAll('.equation__input');
    const equationOutputText = document.querySelector('.equation__output-text');
    const [a, b, c] = equationInput;
    equationOutputText.textContent += `${quadraticEquation(+a.value, +b.value, +c.value)}`;
}

const outputPythagorean = () => {
    const pythagorasInput = document.querySelectorAll('.pythagoras__input');
    const pythagorasOutputText = document.querySelector('.pythagoras__output-text');
    const [a, b, c] = pythagorasInput;
    pythagorasOutputText.textContent += `${pythagoreanTriple(+a.value, +b.value, +c.value)}`;
}

const outputDivisors = () => {
    const dividersInput = document.querySelector('.dividers__input');
    const num = +dividersInput.value;
    const dividersOutputText = document.querySelector('.dividers__output-text');
    numberDivisors(num).map(item => {
        dividersOutputText.textContent += `${item} `;
    })
}

const outputCommon = () => {
    const commonInput = document.querySelectorAll('.common__input');
    const commonOutputText = document.querySelectorAll('.common__output-text');
    const [num1, num2] = commonInput;
    const commonDiv = commonDivisors(+num1.value, +num2.value);
    commonDiv.map(item => {
        commonOutputText[0].textContent += `${item} `;
    })

    commonOutputText[1].textContent += `${commonDiv[commonDiv.length - 1]}`;
    commonOutputText[2].textContent += `${smallestDivisor(+num1.value, +num2.value)}`;


}


equationBtn.addEventListener('click', outputEquation);
pythagorasBtn.addEventListener('click', outputPythagorean);
dividersBtn.addEventListener('click', outputDivisors);
commonBtn.addEventListener('click', outputCommon);
