function hero(state = [], action) {
  console.log('STATE',state, action);
  state = JSON.parse(JSON.stringify(state)); //creating copy of state
  switch (action.type) {
    case "ATTACK":

      state.log.push("you attacked!")
      return state;
    case "CRY":
      console.log("crying?")
      state.log.push("you cried!")
      return state;

    case "UPDATE_CHARACTER":
    	state[action.group][action.prop] += action.amount;
    	return state;

    default:
    	return state;  //if none of the switch statements are used return the default state
  }




}

export default hero;