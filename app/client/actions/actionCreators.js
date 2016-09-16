export function incrementStat(index) {
  return {
    type: 'INCREMENT_STAT',
    amount: 2
  }
}

export function attackEnemy(amount) {
  return {
    type: 'ATTACK_ENEMY',
    amount
  }
}