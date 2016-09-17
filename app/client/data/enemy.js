const enemy = [{
  name: "laser enemy",
  stats: {
    str: 1,
    dex: 1,
    int: 1
  },
  skills: {
    fighting: 0,
    shooting: 0,
    magic: 0,
    healing: 0
  },

  status: {
    health:100,
    mana:100
  },


  performAction: function() {console.log('attacking hero')}
}]


export default enemy;