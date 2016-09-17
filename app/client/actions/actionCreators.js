export function incrementStat(index) {
  return {
    type: 'INCREMENT_STAT',
    amount: 2
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

export function cry() {
  return {
    type: 'CRY'
  }
}