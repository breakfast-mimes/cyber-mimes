function hero(state = [], action) {
  console.log(state, action);
  state = JSON.parse(JSON.stringify(state)); //creating copy of state
  switch (action.type) {
    case "ATTACK":

      state.log.push("you attacked!")
      return state;
    case "CRY":
      console.log("crying?")
      state.log.push("you cried!")
      return state;

    case "INCREMENT_STAT":
    console.log(action.prop)
    	state.stats[action.prop] += 1;
    	return state;

    case "DECREMENT_STAT":
    	state.stats[action.prop] -= 1;
    	return state;
    default:
    	return state;  //if none of the switch statements are used return the default state

  }
}

export default hero;