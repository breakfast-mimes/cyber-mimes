export function equip(equipment) {
  return {
    type: 'CHANGE_EQUIPMENT',
    equipment,
    message: equipment.equip ? "You equip " + equipment.name : null
  }
}