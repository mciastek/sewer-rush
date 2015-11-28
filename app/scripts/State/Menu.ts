module SewerRush.State {
  export class Menu extends Phaser.State {
    background: Phaser.Sprite;

    create() {
      this.background = this.add.sprite(80, 0, 'menu-background');
      this.add.button(0, 0, 'menu', () => {
        this.game.state.start('main');
      });
    }
  }
}
