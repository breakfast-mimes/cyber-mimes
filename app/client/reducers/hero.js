function hero(state = [], action) {
  console.log(state, action);
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
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