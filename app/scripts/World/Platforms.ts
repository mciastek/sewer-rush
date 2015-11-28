/// <reference path="../../vendor/phaser-official/typescript/phaser.d.ts"/>

module SewerRush.World {
  export class Platforms extends Phaser.Group {
    constructor(game: Phaser.Game, parent: Phaser.World, name: String) {
      super(game);

      this.enableBody = true;

      game.add.existing(this);

    }
  }
}
