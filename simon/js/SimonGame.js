import {
	qs
} from './utilities.js'

export default class SimonGame {
	constructor() {
		this.currentGame = [];
		this.notPlaying = false;
		this.lengthOfMove = 1000;
		this.timeBetweenMoves = 500;
	}

	async playCurrentGame() {
		this.notPlaying = false;
		for(let move in this.currentGame) {
			const result = await this.executeMove(this.currentGame[move]);
		}
		this.newMove();
		this.updateMoveDuration();
		this.notPlaying = true;
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

	isNotPlaying() {
		return this.notPlaying;
	}

	executeMove(move) {
		let parentGroup = qs(`#${move}`)[0];
		let element = parentGroup.children[0];
		element.classList.toggle('current-move', true);
		this.playSound(parentGroup);
		return new Promise(resolve => {
			setTimeout(() => {
				element.classList.toggle('current-move', false);
			}, this.lengthOfMove);
			setTimeout(() => {resolve('resolved');}, this.lengthOfMove + this.timeBetweenMoves);
		});
	}

	updateMoveDuration() {
		if (this.currentGame.length % 2 === 0) {
			this.lengthOfMove = this.lengthOfMove > 200 ? this.lengthOfMove - 100 : 100;
			this.timeBetweenMoves = this.timeBetweenMoves > 100? this.timeBetweenMoves - 50 : 50;
		}
	}

	resetCurrentGame() {
		this.currentGame = [];
		this.lengthOfMove = 1000;
		this.timeBetweenMoves = 500;
		this.notPlaying = false;
	}

	playSound(element) {
		qs('audio').forEach(x => {
			x.pause();
		});
		const keyCode = element.getAttribute('data-key');
		const audio = qs(`audio[data-key="${keyCode}"]`)[0];
		if (!audio) return;

	    audio.currentTime = 0;
		audio.play();
	}
}