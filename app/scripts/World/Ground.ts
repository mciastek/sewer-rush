/// <reference path="../../vendor/phaser-official/typescript/phaser.d.ts"/>

module SewerRush.World {
  export class Ground extends Phaser.TileSprite {
    startPosition: {
      x: number,
      y: number
    };
    moveVelocity: number;

    constructor(game: Phaser.Game, x: number, y: number, width: number, height: number) {
      super(game, x, y, width, height, 'floor');
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
