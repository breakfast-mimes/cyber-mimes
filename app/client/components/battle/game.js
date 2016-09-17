function Game(hero, enemy) {
  this.hero = hero;
  this.enemy = enemy;
  this.log = [];
}

Game.prototype.setEnemy = function(enemy) {
  this.enemy = enemy;
};

Game.prototype.nextTurn = function() {
  this.hero.performAction();
  this.enemy.performAction ? this.enemy.performAction() : null;
}

Game.prototype.setHeroAction = function(action) {
  this.hero.performAction = action;
  // this.setEnemyAction();

}

Game.prototype.setEnemyAction = function(action) {
  this.enemy.performAction = action
  this.nextTurn();

}

Game.prototype.updateLog = function(messageArr) {
  messageArr.forEach((message)=>this.log.push(message))
}

export default Game;