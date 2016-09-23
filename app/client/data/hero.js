const hero = {
  name: "laser hero",
  stats: {
    str: 5,
    dex: 5,
    int: 5,
    end: 5,
    luck: 5
  },
  skills: {
    fighting: 0,
    rangedCombat: 0,
    martialArts: 0,
    magic: 0,
    healing: 0
  },
  status: {
    maxHealth:100,
    maxMana: 100,
    health:100,
    mana:100,
    defending: 0
  },
  level: {
    level: 0,
    exp: 0
  },
  battleActions: {
    attack: "Attack",
    cry: "Cry",
    defend: "Defend"
  },
  spells: {
    heal: "Heal",
    fireball: "Fireball"
  },
  items: {
  },
  inventory: {
    gold: 0
  },
  equipment: {
    head: undefined,
    rightHand: {name: "fists", type: "unarmed", dmg: 0, stat: "str"},
    leftHand: undefined,
    body: undefined,
    hands: undefined,
    legs: undefined,
    boots: undefined,
    ring1: undefined,
    ring2: undefined
  }
}

// export default hero;
module.exports = hero;
