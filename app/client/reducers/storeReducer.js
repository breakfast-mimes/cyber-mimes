import util from './util'

function store(state = [], action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "GO_SOUTH":
      state.location.row += 1;
      return state;
    default:
      return state;
  }
}

export default store;
