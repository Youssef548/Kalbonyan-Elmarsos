import Hangman from "./Hangman";
import getPuzzle from "./request";

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
});

const render = () => {
    puzzleEl.innerHTML = "";
    guessesEl.textContent = game1.StatusMessage;

    game1.puzzle.split("").forEach((letter) => {
        const letterEL = document.createElement("span");
        letterEL.textContent = letter;
        puzzleEl.appendChild(letterEL);
    });
};

const startGame = async () => {
    const puzzle = await getPuzzle("2");
    game1 = new Hangman(puzzle, 5);
    render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();