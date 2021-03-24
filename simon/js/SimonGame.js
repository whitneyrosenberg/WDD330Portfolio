import {
	qs
} from './utilities.js'

export default class SimonGame {
	constructor() {
		this.currentGame = [];
	}

	async playCurrentGame() {
		for(let move in this.currentGame) {
			const result = await this.executeMove(this.currentGame[move]);
		}
		this.newMove();
	}

	newMove() {
		let moveNum = Math.floor(Math.random() * (4 - 0) + 0);
		switch(moveNum) {
			case 0:
				this.currentGame.push('up');
				this.executeMove('up');
			break;
			case 1:
				this.currentGame.push('down');
				this.executeMove('down');
			break;
			case 2:
				this.currentGame.push('left');
				this.executeMove('left');
			break;
			case 3: 
				this.currentGame.push('right');
				this.executeMove('right');
			break;
		}
	}

	getCurrentGame() {
		return this.currentGame;
	}

	executeMove(move) {
		let element = qs(`.${move}`).children[0];
		element.classList.toggle('current-move', true);
		return new Promise(resolve => {
			setTimeout(() => {
				element.classList.toggle('current-move', false);
			}, 1500);
			setTimeout(() => {resolve('resolved');}, 2500);
		});
	}
}