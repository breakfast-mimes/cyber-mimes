export function heal(hero, enemy, id) {
  let amount = hero.stats.int
  return {
    type: 'HEAL',
    amount,
    message: "You heal yourself for " + amount + " health."
  }
}

export function fireball(hero, enemy, id) {
  let amount = hero.stats.int + 1
  return {
    type: 'FIREBALL',
    amount,
    id,
    message: ["you throw a giant fireball for " + amount + " damage","the enemy cowers!"]
  }
}