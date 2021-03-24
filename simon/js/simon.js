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
            that.simonGame.playCurrentGame();
        });
        groups.forEach((group) => {
            onTouch(group, (event) => { 
                let move = event.target.parentNode.className.baseVal;
                that.simonGame.executeMove(move);
                handleUserMove(move); });
        });
      }
}

controller.load();

function handleUserMove(userMove) {
    let currentGame = controller.simonGame.getCurrentGame()
    if(controller.currentMove < currentGame.length ) {
        if(userMove === currentGame[controller.currentMove]) {
            console.log('good job');
            controller.currentScore++;
            controller.currentMove++;
        } else {
            console.log('game over');
            controller.currentMove = 0;
        }    
    }
    if(controller.currentMove === currentGame.length) {
        controller.currentMove = 0;
        controller.simonGame.playCurrentGame();
    }
}

function gameOver() {

}