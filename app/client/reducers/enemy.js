import util from './util'

function enemy(state = [], action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {

    case "ATTACK":
      state[action.id].status.health = util.clip(0, 100, state[action.id].status.health - action.amount);
      return state;

    case "FIREBALL":
      var amount = action.attacker.stats.int + 1
      state[action.target.id].status.health -= amount;
      return state;
    default:
      return state;
  }
}

export default enemy;
