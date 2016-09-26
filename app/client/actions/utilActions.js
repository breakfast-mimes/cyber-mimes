export function updateCharacter(group, prop, amount) {
  return {
    type: 'UPDATE_CHARACTER',
    group,
    prop,
    amount
  }
}

export function submitCharacter(name, makeCharacter) {
  return {
    type: 'SUBMIT_CHARACTER',
    name,
    makeCharacter
  }
}

export function heroDeath() {
  return {
    type: 'HERO_DEATH',
    message: "You have died"
  }
}

export function enemyDeath(enemy, id) {
  return {
    type: 'ENEMY_DEATH',
    amount: enemy[id].exp,
    message: [
      "You killed " + enemy[id].name,
      "You gained " + enemy[id].exp + " experience."
      ]
  }
}


export function changeEnemy(enemies, id) {
  if (id) {
    return {
      type: 'CHANGE_ENEMY',
      id,
      message: ["You are fighting " + enemies[id].name]
        .concat(Object.keys(enemies[id].equipment).map(key => enemies[id].equipment[key].name))
    }
  }
}