export function updateCharacter(group, prop , amount) {
  return {
    type: 'UPDATE_CHARACTER',
    group,
    prop,
    amount
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