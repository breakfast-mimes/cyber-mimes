import { physicalDamage, defenderDodged } from './utils/battleCalcs.js';

//this enemy attack is called before battle component renders
export function enemyAttack(hero, enemy, id) {
  let amount = physicalDamage(enemy[id], hero)
  let dodge = defenderDodged(enemy[id], hero);

  return {
    type: 'ENEMY_ATTACK',
    amount: dodge ? 0 : amount,
    message:
      dodge ?        "You dodge the attack" :
      amount === 0 ? "You blocked the attack" :
        enemy[id].name + " attacks with " + enemy[id].equipment.rightHand.name + " dealing " + amount + " damage!"
  }
}