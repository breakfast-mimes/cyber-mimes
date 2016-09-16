function enemy(state = [], action) {
  console.log(state, action);

  switch (action.type) {
    case "ATTACK":
      var amount = action.attacker.stats.str
      state = JSON.parse(JSON.stringify(state));
      state.status.health -= amount;
      return state;
    default:
      return state;
  }
}

export default enemy;
