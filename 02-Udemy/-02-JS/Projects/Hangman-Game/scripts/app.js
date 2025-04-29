const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const keyboardEl = document.querySelector('#keyboard');
let game1;

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode).toLowerCase();
  game1.makeGuess(guess);
  render();
  // Find and disable the corresponding button
  const btn = keyboardEl.querySelector(`[data-key='${guess}']`);
  if (btn && !btn.disabled) {
    btn.disabled = true;
    btn.style.opacity = '0.5';
  }
});

const createKeyboard = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  keyboardEl.innerHTML = '';

  letters.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter.toUpperCase();
    button.classList.add('button');
    button.setAttribute('data-key', letter);
    button.addEventListener('click', () => {
      game1.makeGuess(letter);
      render();
      // Disable the button after click
      button.disabled = true;
      button.style.opacity = '0.5';
    });
    keyboardEl.appendChild(button);
  });
};

const render = () => {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.StatusMessage;

  game1.puzzle.split('').forEach((letter) => {
    const letterEL = document.createElement('span');
    letterEL.textContent = letter;
    puzzleEl.appendChild(letterEL);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  game1 = new Hangman(puzzle, 5);
  render();
  createKeyboard();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();
