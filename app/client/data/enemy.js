const enemy = [{
  name: "weak laser enemy",
  stats: {
    str: 5,
    dex: 5,
    int: 5,
    end: 5,
    luck: 5
  },
  skills: {
    fighting: 10,
    martialArts: 10,
    rangedCombat: 10,
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
  id:0,
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
  },
  exp: 500
},

{

  name: "laser enemy",
  stats: {
    str: 10,
    dex: 10,
    int: 10,
    end: 10,
    luck: 10
  },
  skills: {
    fighting: 30,
    martialArts: 30,
    rangedCombat: 30,
    magic: 0,
    healing: 0
  },
  status: {
    maxHealth:150,
    maxMana: 150,
    health:150,
    mana:150,
    defending: 0
  },
  id:1,
  equipment: {
    head: undefined,
    rightHand: {name: "board sword", type: "meele", dmg: 3, stat: "str"},
    leftHand: undefined,
    body: undefined,
    hands: undefined,
    legs: undefined,
    boots: undefined,
    ring1: undefined,
    ring2: undefined
  },
  exp: 1500
},
{
  name: "super laZer enemy",
  stats: {
    str: 15,
    dex: 15,
    int: 15,
    end: 15,
    luck: 15
  },
  skills: {
    fighting: 100,
    martialArts: 100,
    rangedCombat: 100,
    magic: 0,
    healing: 0
  },
  status: {
    maxHealth:200,
    maxMana: 200,
    health:200,
    mana:200,
    defending: 0
  },
  id:2,
  equipment: {
    head: undefined,
    rightHand: {name: "lazer gun", type: "ranged", dmg: 10, stat: "dex"},
    leftHand: undefined,
    body: undefined,
    hands: undefined,
    legs: undefined,
    boots: undefined,
    ring1: undefined,
    ring2: undefined
  },
  exp: 5000
} ,

{
  name: "test enemy",
  stats: {
    str: 1,
    dex: 1,
    int: 1,
    end: 1,
    luck: 1
  },
  skills: {
    fighting: 1,
    martialArts: 1,
    rangedCombat: 1,
    magic: 0,
    healing: 0
  },
  status: {
    maxHealth:100,
    maxMana:100,
    health:100,
    mana:100,
    defending: 0
  },
  id:3,
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
  },
  exp: 5000
}

]


export default enemy;