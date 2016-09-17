export function incrementStat(prop) {
  return {
    type: 'INCREMENT_STAT',
    prop
  }
}

export function decrementStat(prop) {
  return {
    type: 'DECREMENT_STAT',
    prop
  }
}

export function attack(amount, attacker, target) {
  return {
    type: 'ATTACK',
    amount,
    attacker,
    target
  }
}