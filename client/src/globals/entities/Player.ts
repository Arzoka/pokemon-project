import { EnvironmentTile } from '../../@types/CustomPokemonTypes/Environment/tile.ts';

class Player {
	public x: number;
	public y: number;
	public direction: string;
	public stepSize: number;
	public speed: number;
	public moving: boolean;
	public environment: EnvironmentTile[][];
	public lastEnvironmentTile: {
		x: number,
		y: number,
		encounterCategory: string | null
	};
	public canEncounter: boolean;
	public isRunning: boolean;

	constructor(environment: EnvironmentTile[][], player: Player | null = null) {
		this.x = player ? player.x : 0;
		this.y = player ? player.y : 0;
		this.direction = player ? player.direction : 'down';
		this.stepSize = player ? player.stepSize : 50;
		this.speed = player ? player.speed : 1;
		this.moving = player ? player.moving : false;
		this.lastEnvironmentTile = player ? player.lastEnvironmentTile : {
			x: 0,
			y: 0,
			encounterCategory: null,
		};
		this.canEncounter = player ? player.canEncounter : false;
		this.isRunning = player ? player.isRunning : false;
		this.environment = environment;
	}

	movePlayer(directionKey: string) {
		this.moving = true;
		this.direction = directionKey;
		this.lastEnvironmentTile.x = this.x / 50;
		this.lastEnvironmentTile.y = this.y / 50;


		let newtile: EnvironmentTile | undefined;

		switch (directionKey) {
			case 'up':
				if (this.lastEnvironmentTile.y > 0) {
					newtile = this.environment[this.lastEnvironmentTile.y - 1][this.lastEnvironmentTile.x];
				}
				break;
			case 'down':
				if (this.lastEnvironmentTile.y < this.environment.length - 1) {
					newtile = this.environment[this.lastEnvironmentTile.y + 1][this.lastEnvironmentTile.x];
				}
				break;
			case 'left':
				if (this.lastEnvironmentTile.x > 0) {
					newtile = this.environment[this.lastEnvironmentTile.y][this.lastEnvironmentTile.x - 1];
				}
				break;
			case 'right':
				if (this.lastEnvironmentTile.x < this.environment[0].length - 1) {
					newtile = this.environment[this.lastEnvironmentTile.y][this.lastEnvironmentTile.x + 1];
				}
				break;
		}

		if (!newtile?.walkable) {
			this.playBorderAudio();
			setTimeout(() => {
				this.moving = false;
			}, 1000 / this.speed);
			return;
		}

		if (directionKey === 'up' && this.y !== 0) {
			this.y -= this.stepSize;
		}
		if (directionKey === 'up' && this.y === 0) {
			this.playBorderAudio();
		}
		if (directionKey === 'down' && this.y !== 500) {
			this.y += this.stepSize;
		}
		if (directionKey === 'down' && this.y === 500) {
			this.playBorderAudio();
		}
		if (directionKey === 'left' && this.x !== 0) {
			this.x -= this.stepSize;
		}
		if (directionKey === 'left' && this.x === 0) {
			this.playBorderAudio();
		}
		if (directionKey === 'right' && this.x !== 700) {
			this.x += this.stepSize;
		}
		if (directionKey === 'right' && this.x === 700) {
			this.playBorderAudio();
		}


		const tileX = Math.floor(this.x / 50);
		const tileY = Math.floor(this.y / 50);

		const sameTile = tileX === this.lastEnvironmentTile.x && tileY === this.lastEnvironmentTile.y;

		this.canEncounter = !sameTile && this.environment[tileY][tileX].encounterCategory !== null;


		setTimeout(() => {
			this.moving = false;
		}, 1000 / this.speed);
	}

	updatePlayer() {
		this.lastEnvironmentTile.x = this.x / 50;
		this.lastEnvironmentTile.y = this.y / 50;
	}

	playBorderAudio() {
		const audio = new Audio('/resources/sound/fx/wallBump.mp3');
		audio.play().catch((error) => {
			console.error(error);
		});

	}
}

export default Player;
