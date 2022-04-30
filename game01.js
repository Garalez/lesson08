'use strict'

const game = () => {
  let numberSelected = 1 + (Math.random() * 100);
  numberSelected = Math.round(numberSelected);
  console.log(numberSelected);
  alert('Введите число от 1 до 100');
  let check = true;
  while(check){
    const numberToGuess = +prompt('Введите число');
    if(numberToGuess === null){
      break;
    }
    if(isNaN(numberToGuess)) {
      alert('Введи число!');
    } else if( (numberToGuess > 100) || (numberToGuess < 1)) {
      alert('Нужно ввести число от 1 до 100');
    } else if(numberToGuess < numberSelected) {
      alert('Больше!');
    } else if(numberToGuess > numberSelected) {
      alert('Меньше!');
    } else if(numberToGuess === numberSelected) {
      alert('Правильно!');
      check = false;
    }
  }
  window.alert( 'Игра завершена.' );
}
game()
