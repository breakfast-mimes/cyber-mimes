import util from './util';

function hero(state = [], action) {
  state = JSON.parse(JSON.stringify(state)); //creating copy of state
  if(state.status) {
    state.status.defending--;
    state.status.mana = util.clip(0, 100, state.status.mana + Math.floor(state.stats.int / 4))
  }

  switch (action.type) {

    case "HEAL":
      if(action.success)
        state.status.health = util.clip(0, 100, state.status.health + action.amount);
      state.status.mana = util.clip(0, 100, state.status.mana - action.mana)
      return state;

    case "FIREBALL":
      state.status.mana = util.clip(0, 100, state.status.mana - action.mana)
      if(!action.success)
        state.status.health = util.clip(0, 100, state.status.health - action.amount)
      return state;

    case "DEFEND":
      state.status.defending = state.stats.def;
      return state;

    case "ENEMY_ATTACK":
      state.status.health = util.clip(0, 100, state.status.health - action.amount)
      return state;

    case "ENEMY_DEATH":
      state.level.exp += action.amount;
      return state;

    case "UPDATE_CHARACTER":
    	state[action.group][action.prop] += action.amount;
      return state;

    case "SUBMIT_CHARACTER":
      state.name = action.name;
      return state;

    default:
    	return state;
  }




}

export default hero;