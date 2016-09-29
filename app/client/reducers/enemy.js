import util from './util'


//util.clip function -  returns health after physical damage (the amount variable) is determined.
function enemy(state = [], action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {

    case "ATTACK":
      state[action.id].status.health = util.clip(0, state[action.id].status.maxHealth, state[action.id].status.health - action.amount);
      return state;

    case "FIREBALL":
      if(action.success)
        state[action.id].status.health = util.clip(0, state[action.id].status.maxHealth, state[action.id].status.health - action.amount);
      return state;

    case "HEAL":
      if(!action.success)
        state[action.id].status.health = util.clip(0, state[action.id].status.maxHealth, state[action.id].status.health + action.amount);
      return state;

      case "DANCE":
      state[action.id].status.health = util.clip(0, state[action.id].status.maxHealth, state[action.id].status.health - action.amount);
      return state;

    default:
      return state;
  }
}

export default enemy;
