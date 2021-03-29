import SimonGame from './SimonGame.js';
import {
    qs,
    onTouch
} from './utilities.js'

const controller = {
    load() {
        this.simonGame = new SimonGame();
        this.currentMove = 0;
        this.currentScore = 0;
        let groups = Array.from(qs('g'));
        let that = this;
        window.addEventListener('load', () => {
            const startButton = qs('#start-game')[0];
            const popupClose = qs("#popup-close-button")[0];
            onTouch(startButton, () => {
                startButton.classList.toggle('hidden', true);
                that.simonGame.playCurrentGame();
            });
            onTouch(popupClose, () => {
                qs('#hover_bkgr_fricc')[0].classList.toggle('hidden', true);
                startButton.classList.toggle('hidden', false);
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
            controller.simonGame.playCurrentGame();
        }
    }
}

function gameOver() {
    controller.currentMove = 0;
    controller.simonGame.resetCurrentGame();
    qs('#hover_bkgr_fricc')[0].classList.toggle('hidden', false);
    qs("#final-score")[0].innerHTML = `Final Score: ${controller.currentScore}`;
    controller.currentScore = 0;
}
