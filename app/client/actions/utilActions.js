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
    loot: enemy[id].loot,
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
        .concat(Object.keys(enemies[id].equipment)
          .map(key => enemies[id].equipment[key].equip === 'rightHand' ?
            enemies[id].name + " is wielding " + enemies[id].equipment[key].name :
            enemies[id].name + " is wearing " + enemies[id].equipment[key].name))
    }
  }
}