class Player {
  public x: number;
  public y: number;
  public direction: string;
  public stepSize: number;
  public speed: number;
  public moving: boolean;
  public environment: string[][];
  public canEncounter: boolean;
  public isRunning: boolean;

  constructor(environment: string[][]) {
    this.x = 0;
    this.y = 0;
    this.direction = 'down';
    this.stepSize = 50;
    this.speed = 10;
    this.moving = false;
    this.environment = environment;
    this.canEncounter = false;
    this.isRunning = false;
  }

  movePlayer(directionKey: string) {
    if (this.moving) { return }

    this.moving = true;
    this.direction = directionKey;
    if (directionKey === 'up' && this.y !== 0) { this.y -= this.stepSize }
    if (directionKey === 'up' && this.y === 0) { this.playBorderAudio() }
    if (directionKey === 'down' && this.y !== 500) { this.y += this.stepSize }
    if (directionKey === 'down' && this.y === 500) { this.playBorderAudio() }
    if (directionKey === 'left' && this.x !== 0) { this.x -= this.stepSize }
    if (directionKey === 'left' && this.x === 0) { this.playBorderAudio() }
    if (directionKey === 'right' && this.x !== 700) { this.x += this.stepSize }
    if (directionKey === 'right' && this.x === 700) { this.playBorderAudio() }
    // this.canEncounter = this.environment[this.y / 50][this.x / 50] === 'tall_grass';

    setTimeout(() => {
      this.moving = false;
    }, 1000 / this.speed);
  }

  playBorderAudio() {
    const audio = new Audio('/resources/environment/wallBump.mp3');
    audio.play().then(() => {
      console.log('Wall bump');
    });

  }
}

export default Player;
