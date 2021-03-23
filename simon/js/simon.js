import SimonGame from './SimonGame.js';

const controller = {
    load() {
        this.simonGame = new SimonGame();
        let that = this;
        window.addEventListener('load', () => {
            that.simonGame.playCurrentGame();
        });
      }
}

controller.load();