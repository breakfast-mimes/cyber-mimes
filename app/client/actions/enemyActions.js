export function enemyAttack(hero, enemy, id) {
  let amount = Math.floor(Math.random() * enemy[id].stats.str / 2 + enemy[id].skills.fighting / 5)
  let dodge = false;
  if(Math.floor(hero.stats.dex * Math.random()) > 6) {
    dodge = true;
    amount = 0;
  }

  if(hero.status.defending > 0) {
    amount = Math.floor(amount - hero.stats.def / 2);
    amount = amount < 0 ? 0 : amount;
  }
  return {
    type: 'ENEMY_ATTACK',
    amount,
    message: dodge ? "You dodge the attack" : "the enemy attacks for " + amount + " damage!"
  }
}