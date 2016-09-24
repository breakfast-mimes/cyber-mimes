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