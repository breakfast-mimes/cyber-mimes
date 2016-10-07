import { weapons, head, body } from './items.js'

const enemy = [{
  name: "Basic_Mime",
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
    armor: 1,
    magic: 1,
    healing: 1
  },
  status: {
    maxHealth:100,
    maxMana: 100,
    health:100,
    mana:100,
    defending: 1
  },
  id:0,
  equipment: {
    head: head.LEATHER_CAP,
    rightHand: weapons.FISTS,
    leftHand: undefined,
    body: undefined,
    hands: undefined,
    legs: undefined,
    boots: undefined,
    ring1: undefined,
    ring2: undefined
  },
  loot: [head.LEATHER_CAP],
  exp: 500,
  gold: 10,
  mapSend:[1,1]
},

{

  name: "Blue_Mime",
  stats: {
    str: 3,
    dex: 3,
    int: 3,
    end: 3,
    luck: 3
  },
  skills: {
    fighting: 10,
    martialArts: 10,
    rangedCombat: 10,
    armor: 10,
    magic: 10,
    healing: 10
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
    head: head.LEATHER_CAP,
    rightHand: weapons.BROAD_SWORD,
    leftHand: undefined,
    body: undefined,
    hands: undefined,
    legs: undefined,
    boots: undefined,
    ring1: undefined,
    ring2: undefined
  },
  loot: [],
  exp: 1500,
  gold: 100
},
{
  name: "Red_Mime",
  stats: {
    str: 5,
    dex: 5,
    int: 5,
    end: 5,
    luck: 5
  },
  skills: {
    fighting: 30,
    martialArts: 30,
    rangedCombat: 30,
    armor: 30,
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
    head: head.LEATHER_CAP,
    rightHand: weapons.ANTIMATTER_GUN,
    leftHand: undefined,
    body: body.BROKEN_POWER_ARMOR,
    hands: undefined,
    legs: undefined,
    boots: undefined,
    ring1: undefined,
    ring2: undefined
  },
  loot: [weapons.ANTIMATTER_GUN, body.BROKEN_POWER_ARMOR],
  exp: 5000,
  gold: 1000
} ,

{
  name: "Cowboy_Mime",
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
    armor: 0,
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
    rightHand: weapons.FISTS,
    leftHand: undefined,
    body: undefined,
    hands: undefined,
    legs: undefined,
    boots: undefined,
    ring1: undefined,
    ring2: undefined
  },
  loot: [],
  exp: 5000,
  gold: 10
},

{
  name: "Dinosaur_Mime",
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
    armor: 0,
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
  id:4,
  equipment: {
    head: undefined,
    rightHand: weapons.FISTS,
    leftHand: undefined,
    body: undefined,
    hands: undefined,
    legs: undefined,
    boots: undefined,
    ring1: undefined,
    ring2: undefined
  },
  loot: [],
  exp: 5000,
  gold: 10
},


{
  name: "Disguise_Mime",
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
    armor: 0,
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
  id:5,
  equipment: {
    head: undefined,
    rightHand: weapons.FISTS,
    leftHand: undefined,
    body: undefined,
    hands: undefined,
    legs: undefined,
    boots: undefined,
    ring1: undefined,
    ring2: undefined
  },
  loot: [],
  exp: 5000,
  gold: 10
},

{
  name: "Talking_Mime",
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
    armor: 0,
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
  id:6,
  equipment: {
    head: undefined,
    rightHand: weapons.FISTS,
    leftHand: undefined,
    body: undefined,
    hands: undefined,
    legs: undefined,
    boots: undefined,
    ring1: undefined,
    ring2: undefined
  },
  loot: [],
  exp: 5000,
  gold: 10
}

]




export default enemy;