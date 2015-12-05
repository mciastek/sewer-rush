/// <reference path="../../vendor/phaser-official/typescript/phaser.d.ts"/>

module SewerRush.State {
  export class Preload extends Phaser.State {
    private preloadBar: Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(0, 148, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.load.image('menu-background', 'assets/images/menu-background.png');
      this.load.spritesheet('rat-sprite', 'assets/images/rat-sprite.png', 32, 32, (1184 / 32));
      this.load.image('floor', 'assets/images/floor.png');
      this.load.image('far-background', 'assets/images/far-background.png');
      this.load.image('near-pipes', 'assets/images/near-pipes.png');
    }

    create() {
      // this.game.state.start('menu');
      this.game.state.start('main');
    }
  }
}
