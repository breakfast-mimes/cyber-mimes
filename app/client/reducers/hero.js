import util from './util';

function hero(state = [], action) {
  state = JSON.parse(JSON.stringify(state)); //creating copy of state
  switch (action.type) {

    case "HEAL":
      state.status.health = util.clip(0, 100, state.status.health + action.amount);
      return state;

    case "UPDATE_CHARACTER":
    	state[action.group][action.prop] += action.amount;
      return state;

    case "ENEMY_MURDER":
      state.status.health = 0;
      return state;

    case "ENEMY_ATTACK":
      state.status.health = util.clip(0, 100, state.status.health - action.amount)
      return state;

    case "SUBMIT_CHARACTER":
      state.name = action.name;
      return state;

    default:
    	return state;
  }
}

export default hero;
