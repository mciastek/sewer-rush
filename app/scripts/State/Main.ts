/// <reference path='../Player.ts' />
/// <reference path='../World/Platforms.ts' />
/// <reference path='../World/Ground.ts' />

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
      var platforms = new SewerRush.World.Platforms(this.game, this.game.world, 'platforms');
      var ground = new SewerRush.World.Ground(this.game, 0, this.game.world.height, this.game.width * 1.2, 65);

      // Create game objects here
      this.player = new Player(this.game, 0, this.game.world.height, ground);
    }
  }
}
