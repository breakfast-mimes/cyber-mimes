function hero(state = [], action) {
  console.log(state, action);
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_HERO_ACTION":
      state.performAction = action.action
      return state;
    case "ATTACK":
      state.log.push("you attacked!")
      return state;
    case "CRY":
      console.log("crying?")
      state.log.push("you cried!")
      return state;
  }
  return state;
}

export default hero;