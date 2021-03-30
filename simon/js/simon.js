import SimonGame from './SimonGame.js';
import {
    qs,
    onTouch
} from './utilities.js';
import {
    readFromLS,
    writeToLS
} from './ls.js';

const controller = {
    load() {
        this.simonGame = new SimonGame();
        this.currentMove = 0;
        this.currentScore = 0;
        this.highScore = readFromLS('highScore') ? readFromLS('highScore') : 0;
        this.highScorer = readFromLS('name') ? readFromLS("name") : ' ';
        let groups = Array.from(qs('g'));
        let that = this;
        window.addEventListener('load', () => {
            const startButton = qs('#start-game')[0];
            const popupClose = qs("#popup-close-button")[0];

            if (this.highScore > 0) {
                qs('#high-score')[0].innerHTML = `High Score <br>${this.highScorer}: ${this.highScore}`;
            }

            onTouch(startButton, () => {
                startButton.classList.toggle('hidden', true);
                that.simonGame.playCurrentGame();
            });
            onTouch(popupClose, () => {
                qs('#hover_bkgr_fricc')[0].classList.toggle('hidden', true);
                startButton.classList.toggle('hidden', false);
            });
            onTouch(qs('button')[0], (event) => {
                event.preventDefault();
                let name = qs('#high-scorer')[0].value;
                writeToLS('name', name);
                location.reload();
            });
        });
        groups.forEach((group) => {
            onTouch(group, (event) => {
                let move = event.target.parentNode.id;
                handleUserMove(move); });
        });
      }
}

controller.load();

function handleUserMove(userMove) {
    if(controller.simonGame.isNotPlaying()) {
        controller.simonGame.executeMove(userMove);
        let currentGame = controller.simonGame.getCurrentGame()
        if(controller.currentMove < currentGame.length) {
            if(userMove === currentGame[controller.currentMove]) {
                controller.currentScore++;
                controller.currentMove++;
            } else {
                gameOver();
            }
        }
        if(controller.currentMove === currentGame.length) {
            controller.currentMove = 0;
            setTimeout(() => { controller.simonGame.playCurrentGame(); }, 2500);
        }
    }
}

function gameOver() {
    controller.currentMove = 0;
    controller.simonGame.resetCurrentGame();
    if(controller.highScore < controller.currentScore) {
        qs('#new-high-score')[0].classList.toggle('hidden', false);
        writeToLS('highScore', controller.currentScore);
    }
    qs('#hover_bkgr_fricc')[0].classList.toggle('hidden', false);
    qs("#final-score")[0].innerHTML = `Final Score: ${controller.currentScore}`;
    controller.currentScore = 0;
}
