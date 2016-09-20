import util from './util';

function hero(state = [], action) {
  state = JSON.parse(JSON.stringify(state)); //creating copy of state
  switch (action.type) {

    case "FIREBALL":
      return state;

    case "HEAL":
      if(action.target.name === state.name) {
        state.status.health = util.clip(0, 100, state.status.health + action.amount);
      }
      return state;

    case "CRY":
      return state;

    case "UPDATE_CHARACTER":
    	state[action.group][action.prop] += action.amount;
      return state;

    case "ENEMY_MURDER":
      state.status.health = 0;
      return state;

    case "ENEMY_ATTACK":
      var amount = action.attacker.stats.str
      state.status.health -= amount;
      return state;

    case "SUBMIT_CHARACTER":
      state.name = action.name;
      return state;

    default:
    	return state;
  }




}

export default hero;