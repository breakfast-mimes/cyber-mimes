import {weapons} from './items.js'

const hero = {
  name: "lazer hero",
  stats: {
    str: 10,
    dex: 5,
    int: 5,
    end: 5,
    luck: 5
  },
  skills: {
    fighting: 0,
    rangedCombat: 0,
    martialArts: 0,
    armor: 0,
    magic: 0,
    healing: 0
  },
  status: {
    maxHealth:100,
    maxMana: 100,
    health:100,
    mana:100,
    defending: 0,
    gold: 9002
  },
  level: {
    level: 0,
    exp: 0
  },
  battleFeatures: {
    health:false,
    manaBar:false,
    log:false,
    actions:false,
    spells:false,
    items:false,
    inventory:false
  },
  battleActions: {
    attack: "Attack",
    cry: "Cry",
    defend: "Defend",
    dance: "Dance"
  },
  battleActionSounds: {
    attack:"https://a.clyp.it/tvqmc3wf.mp3",
    cry:"https://a.clyp.it/aqmxzqiu.mp3",
    defend:"https://a.clyp.it/3egqydrk.mp3",
    heal:"https://a.clyp.it/0c4vycta.mp3",
    fireball:"https://a.clyp.it/lkegks1m.mp3"
  },
  spells: {
    heal: "Heal",
    fireball: "Fireball"
  },
  items: {
  },
  inventory: [
    weapons.BROAD_SWORD
  ],
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
  }
}

module.exports = hero;
