const nameButton = document.getElementById('change-name')

const myName = document.getElementById('name')

const myBox = document.getElementById('box')

const lastBox= document.getElementById('last-box')

const userInput = document.getElementById('user-input')

const purpleButton = document.getElementById('purple-color')

const tealButton = document.getElementById('teal-color')

const blueButton = document.getElementById('blue-color')

const fontButton = document.getElementById('change-font')



nameButton. addEventListener ('click', () => {
    myName.textContent = userInput.value;
    userInput.value = '';
});

purpleButton. addEventListener ('click', () => {
    myBox.style.backgroundColor= 'purple';
    lastBox.style.backgroundColor= 'purple';
});
tealButton. addEventListener ('click', () => {
    myBox.style.backgroundColor= 'teal';
    lastBox.style.backgroundColor= 'teal';
});
blueButton. addEventListener ('click', () => {
    myBox.style.backgroundColor= 'blue';
    lastBox.style.backgroundColor= 'blue';
});
fontButton. addEventListener ('click', () => {
    myName.style.fontFamily= 'Times New Roman';
});
