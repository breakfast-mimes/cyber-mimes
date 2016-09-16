function enemy(state = [], action) {
  console.log(state, action);

  switch (action.type) {
    case "ATTACK":
      var amount = action.attacker.stats.str
      state.status.health -= amount;
  }
  return state;
}

export default enemy;
