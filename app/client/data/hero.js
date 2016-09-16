const hero = {
  name: "laser hero",
  stats: {
    str: 5,
    dex: 4,
    int: 5
  },
  skills: {
    fighting: 0,
    shooting: 0,
    magic: 0,
    healing: 0
  },

  status: {
    health:50,
    mana:100
  },
  log:[],

  performAction: null
}

export default hero;