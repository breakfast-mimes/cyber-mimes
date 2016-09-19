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
      console.log(action.attack, "ENEMY IS ATTACKING")
      var amount = action.attacker.stats.str
      state = JSON.parse(JSON.stringify(state));
      state.status.health -= amount;
      return state;
    case "SUBMIT_CHARACTER":
      state.name = action.name;
      return state;

    default:
    	return state;  //if none of the switch statements are used return the default state
  }




}

export default hero;