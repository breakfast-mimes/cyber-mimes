import util from './util';

function hero(state = [], action) {
  state = JSON.parse(JSON.stringify(state)); //creating copy of state
  if(state.status) {
    state.status.defending = state.status.defending < 0 ? 0 : state.status.defending - 1;
    state.status.mana = util.clip(0, state.status.maxMana, state.status.mana + Math.floor(state.stats.int / 4))
  }

  switch (action.type) {

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
      return state

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
      action.makeCharacter(state);
      return state;

    case "CREATE_CHARACTER":
      state.hero = action.hero;
      return state;

    case "FETCH_CHARACTER":
      state.hero = action.hero;
      return state;

    default:
    	return state;
  }
}

export default hero;
