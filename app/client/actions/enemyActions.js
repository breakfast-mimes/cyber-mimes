export function enemyAttack(hero, enemy, id) {
  let amount = Math.floor(Math.random() * enemy[id].stats.str / 2 + enemy[id].skills.fighting / 5)
  let dodge = false;
  if(hero.stats.dex / 100 >  Math.random()) {
    dodge = true;
    amount = 0;
  }

  if(hero.status.defending > 0) {
    amount = Math.floor(amount - hero.stats.end / 2);
    amount = amount < 0 ? 0 : amount;
  }
  return {
    type: 'ENEMY_ATTACK',
    amount,
    message: dodge ? "You dodge the attack" : "the enemy attacks for " + amount + " damage!"
  }
}