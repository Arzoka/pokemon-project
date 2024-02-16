import {
	EnvironmentTile,
} from '../Environment/tile.ts';

export interface IPlayer {
	lastEnvironmentTile: {
		x: number; y: number; encounterCategory: string | null
	};
	x: number;
	y: number;
	environment: EnvironmentTile[][];
	direction: string;
	canEncounter: boolean;
	isRunning: boolean;
	movePlayer: (direction: string) => void;
	updatePlayer: () => void;
	stepSize: number;
	speed: number;
	moving: boolean;
	playBorderAudio: () => void;
}
