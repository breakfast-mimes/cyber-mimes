import { physicalDamage, defenderDodged } from './utils/battleCalcs.js';

export function attack(hero, enemy, id) {
  let amount = physicalDamage(hero, enemy[id]);
  let dodge = defenderDodged(hero, enemy[id]);

  return {
    type: 'ATTACK',
    amount: dodge ? 0 : amount,
    message:
      dodge ?        [enemy[id].name + " dodges the attack."] :
      amount === 0 ? [enemy[id].name + " blocked the attack."] :
        ["You attack with your " + hero.equipment.rightHand.name + " for " + amount + " damage."]
     ,
    id
  }
}

export function defend(hero, enemy, id) {
  return {
    type: 'DEFEND',
    message: "you prepare to defend"
  }
}

export function cry(hero, enemy, id) {
  return {
    type: 'CRY',
    message: "you cry and cower in the corner as you beg whatever god that exists to smite the demon creature"
  }
}
