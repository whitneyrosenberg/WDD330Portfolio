export default class SimonGame {
	SimonGame() {
		this.currentGame = [];
	}

	playCurrentGame() {
		this.currentGame.foreach((move) => {
			this.executeMove(move);
		});
		this.newMove();
	}

	newMove() {
		let moveNum = Math.floor(Math.random() * (4 - 0) + 0);
		switch(moveNum) {
			case 0:
			console.log('up');
			break;
			case 1:
			console.log('down');
			break;
			case 2:
			console.log('left');
			break;
			case 3: 
			console.log('right');
			break;
		}
	}

	getCurrentGame() {

	}

	executeMove() {

	}
}