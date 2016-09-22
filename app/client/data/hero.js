const hero = {
  name: "laser hero",
  stats: {
    str: 5,
    dex: 5,
    int: 5,
    luck: 5,
    def: 5
  },
  skills: {
    fighting: 0,
    shooting: 0,
    magic: 0,
    healing: 0
  },
  status: {
    health:100,
    mana:100,
    defending: 0
  },
  level: {
    level: 1,
    exp: 0
  },
  battleActions: {
    attack: "Attack!",
    cry: "Cry",
    defend: "Defend!",
  },
  spells: {
    heal: "Heal",
    fireball: "Fireball"
  },
  items: {
  }
}

export default hero;