'use strict'

const game = () => {
  const firstNumber = +prompt('Первое число от', '10');
  const secondNumber = +prompt('Второе число до', '20');
  const arrToGuess = [];
  const NumberSelected =  Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  console.log(NumberSelected);
  let attemptsCount = (secondNumber - firstNumber) * 0.3;
  while(attemptsCount > 0) {
    let i = 0;
    i < arrToGuess.length;
    i += 1;
    const numberToGuess = +prompt(`Введите число от ${firstNumber} и до ${secondNumber}`);
    arrToGuess.push(numberToGuess);
    console.log(arrToGuess);
    if (!numberToGuess) {
      break;
    }
    if (isNaN(numberToGuess)) {
      alert('Введи число!'); 
    } else if (arrToGuess[i] === numberToGuess) {
      alert('Это число вы уже вводили');
    } else if (numberToGuess < NumberSelected) {
      attemptsCount -= 1;
      alert('Больше!');
    } else if (numberToGuess > NumberSelected) {
      attemptsCount -= 1;
      alert('Меньше!');
    } else if (numberToGuess === NumberSelected) {
      alert('Правильно!');
      break;
    } 
    if (attemptsCount <= 0) {
      alert('Вы истратили все попытки');
      break;
    }
    alert(`У вас осталось попыток: ${attemptsCount}`);
  }
  alert( 'Игра завершена.' );
}
game()
