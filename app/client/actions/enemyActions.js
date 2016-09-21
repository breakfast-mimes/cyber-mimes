export function enemyAttack(hero, enemy, id) {
  let amount = Math.floor(enemy[id].stats.str / 2 + enemy[id].skills.fighting / 5)
  if(hero.status.defending > 0) {
    amount = Math.floor(amount - hero.stats.def / 1.5);
    amount = amount < 0 ? 0 : amount;
  }
  return {
    type: 'ENEMY_ATTACK',
    amount,
    message: "the enemy attacks for " + amount + " damage!"
  }
}