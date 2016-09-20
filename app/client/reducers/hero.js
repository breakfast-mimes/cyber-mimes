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

    case "HEAL":
      if(action.target.name === state.name) {
        state.status.health += action.amount;
        if(state.status.health > 100)
          state.status.health = 100;
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