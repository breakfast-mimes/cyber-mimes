import util from './util';
import defaultHero from '../data/hero';

function hero(state = [], action) {
  state = JSON.parse(JSON.stringify(state)); //creating copy of state
  if(state.status) {
    state.status.defending = state.status.defending < 1 ? 0 : state.status.defending - 1;
    state.status.mana = util.clip(0, state.status.maxMana, state.status.mana + Math.floor(state.stats.int / 4))
  }

  switch (action.type) {
    case "SELL_ITEM":
      state.status.gold += action.item.value;
      for(var i in state.inventory){
        if(state.inventory[i].name === action.item.name){
          console.log("removeD?",state.inventory.splice(i,1), state.inventory[i])
          state.inventory.splice(i,1)
          break;
        }
      }
      console.log(state.inventory,"dfg" ,action.item)
      return state
    case "BUY_ITEM":
      if (state.inventory.filter((item)=> item.name === action.item.name )[0] === undefined) {
        state.inventory.push(action.item);
        state.status.gold -= action.item.value;
      }
      return state
    case "PICK_UP":
      if (state.inventory.filter((item)=> item.name === action.item.name )[0] === undefined) {
        state.inventory.push(action.item)
      }
      console.log("state", state)
      return state

    case "HEAL":
      if(action.success)
        state.status.health = util.clip(0, state.status.maxHealth, state.status.health + action.amount);
      state.status.mana = util.clip(0, state.status.maxMana, state.status.mana - action.mana)
      return state;

    case "FIREBALL":
      state.status.mana = util.clip(0, state.status.maxMana, state.status.mana - action.mana)
      if(!action.success)
        state.status.health = util.clip(0, state.status.maxHealth, state.status.health - action.amount)
      return state;

    case "DEFEND":
      state.status.defending = state.stats.end;
      console.log('DEFEND STATE',state);
      return state;


    case "ENEMY_ATTACK":
      state.status.health = util.clip(0, state.status.maxHealth, state.status.health - action.amount)
      return state;

    case "ENEMY_DEATH":
      state.level.exp += action.exp;
      state.status.gold += action.gold;
      action.loot.forEach(loot => state.inventory.push(loot));
      return state;

    case "HERO_DEATH":
      state.level.exp = (state.level.level) * (state.level.level) * 500;
      state.status.gold = 0;
      state.status.health = state.status.maxHealth;
      return state;

    case "CHANGE_EQUIPMENT":
      if(action.equipment.equip) {
        console.log(state.inventory,action.i)
        if(state.inventory[action.i].e) {
          state.equipment[action.equipment.equip] =
            action.equipment.equip === 'rightHand' ?
              {name: "fists", type: "unarmed", dmg: 0, stat: "str", equip: "rightHand", e: true} : undefined;
        } else {
          for(let i = 0; i < state.inventory.length; i++) {
            if(state.inventory[i].equip === action.equipment.equip)
              state.inventory[i].e = false;
          }
          state.equipment[action.equipment.equip] = action.equipment;
        }
        state.inventory[action.i].e = !state.inventory[action.i].e;
      }
      return state;

    case "DROP_ITEM":
      console.log(state.inventory, action.i)
      state.inventory = state.inventory.slice(0, action.i).concat(state.inventory.slice(action.i + 1));
      return state;

    case "UPDATE_CHARACTER":
    	state[action.group][action.prop] += action.amount;
      return state;

    case "SUBMIT_CHARACTER":
      state.name = action.name;
      state.level.level += 1;
      state.status.maxHealth = 50 + state.stats.end * 10;
      state.status.maxMana = 50 + state.stats.int * 10;
      state.status.health = state.status.maxHealth;
      state.status.mana = state.status.maxMana;
      action.submitCb(state);
      return state;

    case "GET_CHARACTER":
      state = action.hero;

    case "CREATE_CHARACTER":
      state.hero = action.hero;

    case "GET_CHARACTER":
      state = action.hero;

    case "USER_LOGOUT":
      state = defaultHero;
      return state;

    default:
    	return state;
  }
}

export default hero;
