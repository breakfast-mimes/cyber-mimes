function enemy(state = [], action) {
  console.log(state, action);

  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ATTACK":

      if (action.target.name === state[0].name) {
        var amount = action.attacker.stats.str
        state[0].status.health -= amount;
      }
      return state;
    case "ENEMY_MURDER":
      return state;
    case "FIREBALL":
      var amount = action.attacker.stats.int + 1
      console.log(action.attacker.stats, "fireball amount")
      state = JSON.parse(JSON.stringify(state));
      state[0].status.health -= amount;
      return state;
    default:
      return state;
  }
}

export default enemy;
