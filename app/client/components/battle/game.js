function Game(hero, enemy) {
  this.hero = hero;
  this.enemy = enemy;
}

Game.prototype.setEnemy = function(enemy) {
  this.enemy = enemy;
};

Game.prototype.nextTurn = function() {
  console.log (this.hero.performAction)
  this.hero.performAction();
  this.enemy.performAction ? this.enemy.performAction() : null;
}

export default Game;