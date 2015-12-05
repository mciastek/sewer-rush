/// <reference path="../../vendor/phaser-official/typescript/phaser.d.ts"/>

module SewerRush.World {
  export class Background extends Phaser.TileSprite {
    startPosition: {
      x: number,
      y: number
    };
    moveVelocity: number;

    constructor(game: Phaser.Game, x: number, y: number, width: number, height: number, asset: string) {
      super(game, x, y, width, height, asset);
      this.game.add.existing(this);

      this.moveVelocity = 1;
      this.startPosition = {
        x: <number> x,
        y: <number> y
      };
    }

    move(direction: string) {
      if (direction === 'left') {
        if (this.position.x <= this.startPosition.x) {
          this.position.x += this.moveVelocity;
        }
      } else {
        if (Math.abs(this.position.x) <= (this.width - this.game.world.width)) {
          this.position.x -= this.moveVelocity;
        }
      }
    }
  }
}
