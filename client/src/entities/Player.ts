import {
	EnvironmentTile,
} from '../@types/CustomPokemonTypes/Environment/tile.ts';

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

	constructor(environment: EnvironmentTile[][]) {
		this.x = 0;
		this.y = 0;
		this.direction = 'down';
		this.stepSize = 50;
		this.speed = 10;
		this.moving = false;
		this.environment = environment;
		this.canEncounter = false;
		this.isRunning = false;
		this.lastEnvironmentTile = {
			x: 0,
			y: 0,
			encounterCategory: null,
		};
	}

	movePlayer(directionKey: string) {
		if (this.moving) {
			return;
		}

		this.moving = true;
		this.direction = directionKey;
		this.lastEnvironmentTile.x = this.x / 50;
		this.lastEnvironmentTile.y = this.y / 50;

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
		const audio = new Audio('/resources/environment/wallBump.mp3');
		audio.play().then(() => {
			console.log('Wall bump');
		});

	}
}

export default Player;
