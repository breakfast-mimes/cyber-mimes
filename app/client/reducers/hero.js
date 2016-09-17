function hero(state = [], action) {
  console.log('STATE',state, action);
  state = JSON.parse(JSON.stringify(state)); //creating copy of state
  switch (action.type) {
    case "ATTACK":
      return state;
    case "FIREBALL":
      return state;
    case "CRY":
      console.log("crying?")
      return state;
    case "UPDATE_CHARACTER":
    	state[action.group][action.prop] += action.amount;
    case "ENEMY_MURDER":
      state[0].status.health = 0;
    case "ENEMY_ATTACK":
      console.log(action.attack, "ENEMY IS ATTACKING")
      var amount = action.attacker.stats.str
      state = JSON.parse(JSON.stringify(state));
      state.status.health -= amount;

    default:
    	return state;  //if none of the switch statements are used return the default state
  }




}

export default hero;