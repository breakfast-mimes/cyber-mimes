function enemy(state = [], action) {

  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ATTACK":

      if (action.target.id !== undefined && action.target.name === state[action.target.id].name) {
        var amount = action.attacker.stats.str
        state[action.target.id].status.health -= amount;
      }
      return state;
    case "ENEMY_MURDER":
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
