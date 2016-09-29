import { browserHistory } from 'react-router';

export function sellItem(item) {
  return {
    type: 'SELL_ITEM',
    item
  }
}

export function buyItem(item) {
  return {
    type: 'BUY_ITEM',
    item
  }
}

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
  browserHistory.push('/map');
  return {
    type: 'HERO_DEATH',
    message: [
      "You have died",
      "You lost all your gold and experience"
    ]
  }
}

export function enemyDeath(enemy, id) {
  let gold = Math.floor(enemy[id].gold * (Math.random() + 0.5))
  return {
    type: 'ENEMY_DEATH',
    exp: enemy[id].exp,
    loot: enemy[id].loot,
    gold,
    message: [
      "You killed " + enemy[id].name,
      "You gained " + enemy[id].exp + " experience.",
      "You found " + gold + " gold."
      ].concat(enemy[id].loot.map(loot => "You have looted " + loot.name))
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

export function soundEffect() {
  return{
    type:"SOUND_EFFECT"
  }
}