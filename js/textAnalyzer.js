const textArea = document.querySelector('.content__textarea');
const contentWordCount = document.querySelector('.content__word-count span');
const contentCharacters = document.querySelector('.content__characters span');
const contentCharactersNoSpace = document.querySelector('.content__characters-no-space span');
const contentCharacterPercentage = document.querySelector('.content__character-percentage span')
const contentBox = document.querySelectorAll('.content__box');


const wordCount = () => {
    // let value = textArea.value.split(' ');
    
    return textArea.value.split(' ').filter(item => {
        if(item != ' ') return item;
    })

}

const characters = () => {
    return textArea.value.split('');
}

const charactersNoSpace = () => {
    let value = textArea.value.split('');
    
    return value.filter(item => {
        if(item != ' ') return item;
    })
}

const charactersPercentage = () => {
    let value = textArea.value.split('').filter(item => {
        if(item != ' ') return item;
    });
    
    let valueLength = value.length;

    const characters = {};

    value.map(item => {
        if(characters[item]) characters[item]++;
        else characters[item] = 1;
    })

    const percentageSymbols = [];
    for(let item in characters) {
        percentageSymbols.push([item, Math.floor(characters[item] / valueLength * 100)]);
    }

    return percentageSymbols;
}

const outPercentage = () => {
    let str = '';
    for(let [key, value] of charactersPercentage()) {
        console.log(key, value)
        str += `<br>${key} = ${value}%`;
    }

    contentCharacterPercentage.innerHTML = str;
}

const outputArea = () => {
    if(contentBox[0].checked) contentWordCount.textContent = wordCount().length;
    if(contentBox[1].checked) contentCharacters.textContent = characters().length;
    if(contentBox[2].checked) contentCharactersNoSpace.textContent = charactersNoSpace().length;
    if(contentBox[3].checked) outPercentage();
    
}

textArea.addEventListener('blur', outputArea);