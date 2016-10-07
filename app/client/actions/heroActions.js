import { browserHistory } from 'react-router';

export function equip(equipment, i) {
  return {
    type: 'CHANGE_EQUIPMENT',
    equipment,
    i,
    message: equipment.equip ? equipment.e ?
      "You remove " + equipment.name :
      "You equip " + equipment.name :
      "You try to use " + equipment.name + " but its useless"
  }
}

export function dropItem(equipment, i) {
  return {
    type: 'DROP_ITEM',
    i,
    message: "You drop " + equipment.name
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