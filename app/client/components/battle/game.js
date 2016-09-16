function Game(hero, enemy) {
  this.hero = hero;
  this.enemy = enemy;
}

Game.prototype.setEnemy = function(enemy) {
  this.enemy = enemy;
};

Game.prototype.nextTurn = function() {
  this.hero.performAction();
  this.enemy.performAction ? this.enemy.performAction() : null;
}

export default Game;