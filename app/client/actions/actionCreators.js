export function updateCharacter(group, prop, amount) {
  return {
    type: 'UPDATE_CHARACTER',
    group,
    prop,
    amount
  }
}

export function submitCharacter(name) {
  return {
    type: 'SUBMIT_CHARACTER',
    name
  }
}
export function attack(attacker, target) {
  return {
    type: 'ATTACK',
    attacker,
    target
  }
}

export function fireball(attacker, target) {
  return {
    type: 'FIREBALL',
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

export function heal(amount,target) {
  return {
    type: 'HEAL',
    amount,
    target
  }
}

export function enemyMurder() {
  return {
    type: 'ENEMY_MURDER'
  }
}

export function changeMap(location) {
  return {
    type: 'CHANGE_MAP',
    location
  }
}

//function to call if you just want the thing to re render
export function render() {
  return {
    type: 'render'
  }
}
