export function enemyAttack(attacker) {
  let amount = attacker.stats.str
  return {
    type: 'ENEMY_ATTACK',
    amount,
    message: "the enemy attacks for " + amount + " damage!"
  }
}