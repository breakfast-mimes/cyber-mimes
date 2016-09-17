function Game(hero, enemy) {
  this.hero = hero;
  this.enemy = enemy;
  this.log = [];
}

Game.prototype.setEnemy = function(enemy) {
  this.enemy = enemy;
};

Game.prototype.nextTurn = function() {
  console.log (this.hero.performAction)
  this.hero.performAction();
  this.enemy.performAction ? this.enemy.performAction() : null;
}

Game.prototype.setHeroAction = function(action) {
  this.hero.performAction = action;
}

Game.prototype.updateLog = function(message) {
  this.log.push(message);
}

export default Game;