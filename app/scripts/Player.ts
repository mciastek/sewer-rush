/// <reference path="../vendor/phaser-official/typescript/phaser.d.ts"/>

module SewerRush {
  export class Player extends Phaser.Sprite {
    moveVelocity: number;
    jumpVelocity: number;
    facing: string;
    wasStanding: boolean;
    scaleBase: number;

    constructor(game: Phaser.Game, x: number, y: number) {
      super(game, x, y, 'rat-sprite', 0);

      this.jumpVelocity = 250;
      this.moveVelocity = 120;

      this.facing = 'idle';
      this.wasStanding = false;
      this.scaleBase = 1.5;

      this.anchor.setTo(0.5, 1);

      this.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
      this.animations.add('walk', [9, 10, 11, 12, 13], 10, true);
      this.animations.add('jump', [13, 14, 15, 16, 17], 10, true);

      game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
      game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
      game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

      game.physics.arcade.enable(this);
      game.add.existing(this);

      this.scale.setTo(this.scaleBase, this.scaleBase);

      this.body.collideWorldBounds = true;
    }

    move(direction: string) {
      var factor = (direction === 'left') ? -1 : 1;

      this.body.velocity.x = this.moveVelocity * factor;

      if (this.facing !== direction) {
        this.scale.x = factor * this.scaleBase;
        this.facing = direction;
      }
    }

    jump() {
      this.body.velocity.y = -this.jumpVelocity;
    }

    update() {

      var standing = this.body.blocked.down || this.body.touching.down;
      var movingLeft = this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
      var movingRight = this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);

      this.body.velocity.x = 0;

      if (movingLeft || movingRight) {

        if (standing) {
          this.animations.play('walk');
        } else {
          this.animations.play('jump');
        }

        if (movingLeft) {
          this.move('left');
        }

        if (movingRight) {
          this.move('right');
        }
      } else {

        if (standing) {
          this.animations.play('idle');
        } else {
          this.animations.play('jump');
        }

        this.facing = 'idle';
      }

      if (standing && this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        this.jump();
      }

      this.wasStanding = standing;
    }
  }
}
