function hero(state = [], action) {
  console.log(state, action);
  switch (action.type) {
    case "ATTACK":
    case "INCREMENT_STAT":
    console.log(action.prop)
    	state = JSON.parse(JSON.stringify(state));  //creating copy of state
    	state.stats[action.prop] += 1;
    	return state;
    case "DECREMENT_STAT":
    	state = JSON.parse(JSON.stringify(state));  //creating copy of state
    	state.stats[action.prop] -= 1;
    	return state;
    default:
    	return state;
  }
}

export default hero;