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

export function fireball(amount, attacker, target) {
  return {
    type: 'FIREBALL',
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

export function enemyCry() {
  return {
    type: 'ENEMY_CRY'
  }
}

export function enemyAttack(attacker,target) {
  return {
    type: 'ENEMY_ATTACK',
    attacker,
    target
  }
}

export function enemyMurder() {
  return {
    type: 'ENEMY_MURDER'
  }
}