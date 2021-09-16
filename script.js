'use strict';

var randomNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').value = randomNumber;
console.log(randomNumber);
var score = 20;

var highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  if (score >= 1) {
    if (guess >= 0 && guess < 21) {
      if (!guess) {
        document.querySelector('.message').textContent = 'give a number';
      } else if (guess === randomNumber) {
        document.querySelector('.message').textContent = 'well done';
        document.querySelector('.number').textContent = randomNumber;
        if (highscore < score) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }

        document.querySelector('body').style.backgroundColor = 'green';
      } else if (guess > randomNumber) {
        if (score > 0) {
          document.querySelector('.message').textContent = 'too high';
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent = 'please try again';
        }
      } else if (guess < randomNumber) {
        if (score > 0) {
          document.querySelector('.message').textContent = 'too low';
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent = 'please try again';
        }
      }
    } else {
      document.querySelector('.message').textContent = 'guess between 1 to 20';
    }
  } else {
    document.querySelector('.message').textContent = 'please try again';
    document.querySelector('body').style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').value = randomNumber;
  console.log(randomNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
