export function attack(hero, enemy, id) {
  let amount = Math.floor(hero.stats.str * Math.random() / 2
                        + hero.skills.fighting / 5
                        + hero.stats.luck * Math.random() / 4);
  let dodge = false;
  if(enemy[id].stats.dex / 100 >  Math.random()) {
    dodge = true;
    amount = 0;
  }

  return {
    type: 'ATTACK',
    amount: amount,
    message: dodge ?
    [
      "The enemy dodges the attack."
    ] : [
      "You attack for " + amount + " damage."
    ],
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
