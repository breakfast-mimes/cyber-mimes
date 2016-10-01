
//formula for amount of physical damage taken by hero and enemy
export const physicalDamage = function(attacker, defender) {

  let dmg = Math.floor(
      attacker.stats[attacker.equipment.rightHand.stat] * Math.random() / 2
    + (attacker.equipment.rightHand.type === "melee" ? attacker.skills.fighting / 8 : 0)
    + (attacker.equipment.rightHand.type === "unarmed" ? attacker.skills.martialArts / 8 : 0)
    + (attacker.equipment.rightHand.type === "ranged" ? attacker.skills.rangedCombat / 8 : 0)
    + (attacker.stats.luck * Math.random() / 4)
    + (attacker.equipment.rightHand.dmg)
    - (defender.status.defending > 0 ? defender.stats.end / 2 : 0)
    - (getArmor(defender) * defender.skills.armor / 80)
  );
  return dmg < 0 ? 0 : dmg;
}

export const defenderDodged = function(attacker, defender) {
  return (defender.stats.dex / 150 >  Math.random())
}

export const getArmor = function(defender) {
  return Object.keys(defender.equipment)
    .reduce((armor, key) =>
      armor + (defender.equipment[key].armor || 0), 0);
}