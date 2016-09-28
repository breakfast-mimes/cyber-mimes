import { physicalDamage, defenderDodged } from './utils/battleCalcs.js';

//if you dodged attack, you take no physical damage, otherwise physical damage taken.
//dodge is based on dexterity property and randomized formula
//amount - returns health after physical damage is determined.
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

export function dance (hero, enemy, id) {
  let amount = physicalDamage(hero, enemy[id]);
  console.log('AMOUNT',amount)
  let dodge = defenderDodged(hero, enemy[id]);
  return {
    type: 'DANCE',
    amount: dodge ? 0 : amount,
    message:  dodge ? ["You did the Carlton dance " + enemy[id].name + "isn't impressed" ] :
    amount === 0 ? [" You did the Carlton dance, " + enemy[id].name + " isn't impressed" ] :
        ["You do the Muhammed Ali shuffle and get in a jab for " + amount + " damage."],
    id


  }

}
