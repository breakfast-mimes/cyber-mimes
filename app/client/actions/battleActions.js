export function attack(hero, enemy, id) {
  let amount = hero.stats.str
  return {
    type: 'ATTACK',
    amount: amount,
    message: "you attack for " + amount + " damage.",
    id
  }
}

export function defend(hero, enemy, id) {
  return {
    type: 'DEFEND',
    message: "you defend"
  }
}

export function cry(hero, enemy, id) {
  return {
    type: 'CRY',
    message: "you cry and cower in the corner as you beg whatever god that exists to smite the demon creature"
  }
}
