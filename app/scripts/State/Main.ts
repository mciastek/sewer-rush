/// <reference path='../Player.ts' />
/// <reference path='../World/Platforms.ts' />

module SewerRush.State {
  export class Main extends Phaser.State {
    player: SewerRush.Player;

    create() {
      this.stage.backgroundColor = 0x000000;
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.world.setBounds(0, 0, this.game.width, this.game.height - 65);

      this.game.physics.arcade.gravity.y = 750;
      this.game.physics.arcade.skipQuadTree = false;

      var platforms = this.game.add.group();
      var platforms = new World.Platforms(this.game, this.game.world, 'platforms');
      var ground = this.game.add.tileSprite(0, this.game.world.height, this.game.width, 65, 'floor');

      // Create game objects here
      this.player = new Player(this.game, 0, this.game.world.height);
    }
  }
}
