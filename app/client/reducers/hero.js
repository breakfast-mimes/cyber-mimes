function hero(state = [], action) {
  state = JSON.parse(JSON.stringify(state)); //creating copy of state
  switch (action.type) {
    case "ATTACK":
      if (action.target.name === state.name) {
        var amount = action.attacker.stats.str
        state.status.health -= amount;
      }
      return state;
    case "FIREBALL":
      return state;
    case "CRY":
      return state;
    case "UPDATE_CHARACTER":
    	state[action.group][action.prop] += action.amount;
      return state;
    case "ENEMY_MURDER":

      state.status.health = 0;
      return state;
    default:
    	return state;  //if none of the switch statements are used return the default state
  }




}

export default hero;