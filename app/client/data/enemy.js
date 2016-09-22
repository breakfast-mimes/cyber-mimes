const enemy = [{
  name: "weak laser enemy",
  stats: {
    str: 5,
    dex: 5,
    int: 5
  },
  skills: {
    fighting: 10,
    shooting: 0,
    magic: 0,
    healing: 0
  },

  status: {
    health:100,
    mana:100
  },
  id:0,
  exp: 500
},

{

  name: "laser enemy",
  stats: {
    str: 10,
    dex: 10,
    int: 10
  },
  skills: {
    fighting: 30,
    shooting: 0,
    magic: 0,
    healing: 0
  },

  status: {
    health:100,
    mana:100
  },
  id:1,
  exp: 1500
},
{
  name: "super laZer enemy",
  stats: {
    str: 15,
    dex: 15,
    int: 15
  },
  skills: {
    fighting: 100,
    shooting: 0,
    magic: 0,
    healing: 0
  },
  status: {
    health:100,
    mana:100
  },
  id:2,
  exp: 5000
} ,

{
  name: "test enemy",
  stats: {
    str: 1,
    dex: 1,
    int: 1
  },
  skills: {
    fighting: 1,
    shooting: 0,
    magic: 0,
    healing: 0
  },
  status: {
    health:100,
    mana:100
  },
  id:3,
  exp: 5000
}

]


export default enemy;