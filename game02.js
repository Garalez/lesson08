'use strict'

const arrToGuess = [];
const firstNumber = +prompt('первое число', '10');
const secondNumber = +prompt('второе число', '20');
const NumberSelected =  Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
console.log(`Загаданное число ${NumberSelected}`);
let attemptsCount = (secondNumber - firstNumber) * 0.3;
let attempts = 0;
let correctGuess = false;

const getUserGuess = () => {
  const userGuess = +prompt(`Введите число между ${firstNumber} и ${secondNumber}`);
  return userGuess;
}

const checkGuessInRange = (guess) => {
  if (guess < firstNumber || guess > secondNumber) {
    alert(`Ваше число ${guess} не входит в диапазон от ${firstNumber} до ${secondNumber}`);
    return false;
  }
  return true;
}

const checkUserGuess = (guess) => {
  for (let i = 0; i < arrToGuess.length; i++) {
    if (arrToGuess[i] === guess) {
      alert(`Вы уже вводили это число ${guess}`);
      return false;
    }
  }
  return true;
}

const addToArrToGuess = (guess) => {
  arrToGuess.push(guess);
}

const updateGuessAttempts = () => {
  attempts++;
}

const displayResults = () => {
  if (correctGuess) {
    alert(`Поздравляем! Вы угадали число ${NumberSelected} за ${attempts} попыток`);
  } else {
    alert(`Вы не угадали число ${NumberSelected} за ${attempts} попытки`);
  }
}

const compareGuess = (guess) => {
  if (guess === NumberSelected) {
    correctGuess = true;
  }
}

const notifyUser = (userGuess, NumberSelected) => {
  if (userGuess > NumberSelected) {
    alert(`Меньше!`);
  } else if (userGuess < NumberSelected) {
    alert(`Больше!`);
  }
}

while (attempts <= attemptsCount && !correctGuess) {
  const userGuess = getUserGuess();
  if (!userGuess) {
    alert ('Игра закончена');
    break;
  };
  if (checkGuessInRange(userGuess)) {
    if (checkUserGuess(userGuess)) {
      notifyUser(userGuess, NumberSelected);
      addToArrToGuess(userGuess);
      compareGuess(userGuess);
      updateGuessAttempts();
      console.log(arrToGuess);
    }
  }
  if (attempts === attemptsCount) {
    displayResults();
  }
}
