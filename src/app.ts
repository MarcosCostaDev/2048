import "phaser";
import { playGame } from "./playGame";
import { gameOptions } from "./gameOptions";

export let Game: Game2048;
const config: GameConfig = {
  type: Phaser.WEBGL,
  width: gameOptions.tileSize * 4,
  height: gameOptions.tileSize * 4,
  backgroundColor: 0x444444,
  scene: [playGame]
};
export class Game2048 extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}
window.onload = () => {
  Game = new Game2048(config);
  window.focus()
  resize();
  window.addEventListener("resize", resize, false);
};

export function resize() {
  var canvas = document.querySelector("canvas");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var windowRatio = windowWidth / windowHeight;
  var gameRatio = +Game.config.width / +Game.config.height;
  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = (windowWidth / gameRatio) + "px";
  }
  else {
    canvas.style.width = (windowHeight * gameRatio) + "px";
    canvas.style.height = windowHeight + "px";
  }
}