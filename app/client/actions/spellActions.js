export function heal(hero, enemy, id) {
  let amount = Math.floor(hero.stats.int / 2 + hero.skills.magic / 6 + hero.skills.healing / 6);
  let mana = 9;
  let success = true;

  if(hero.status.mana < mana) {
    mana = hero.status.mana;
    success = false;
  }

  return {
    type: 'HEAL',
    amount,
    mana,
    success,
    id,
    message: success ? [
      "You cast heal for " + mana + " mana.",
      "You heal yourself for " + amount + " health."
    ] : [
      "You are too tired and accidently heal the enemy for " + amount + " health"
    ]
  }
}

export function fireball(hero, enemy, id) {
  let amount = Math.floor(hero.stats.int / 2 + hero.skills.magic / 5) + 5;
  let mana = 12;
  let success = true;

  if(hero.status.mana < mana) {
    mana = hero.status.mana;
    success = false;
  }

  return {
    type: 'FIREBALL',
    amount,
    id,
    mana,
    success,
    message: success ? [
      "You cast fireball for " + mana + " mana.",
      "You throw a giant fireball for " + amount + " damage"
    ] : [
      "You try to cast fireball, but you are exhausted and fumble the spell",
      "You burn yourself for " + amount + " damage."
    ]
  }
}