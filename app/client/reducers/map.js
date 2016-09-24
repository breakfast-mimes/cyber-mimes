import util from './util'

function map(state = [], action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "GO_SOUTH":
      state.location.row += 1;
      return state;
    case "GO_NORTH":
      state.location.row -= 1;
      return state;
    case "GO_EAST":
      state.location.col += 1;
      return state;
    case "GO_WEST":
      state.location.col -= 1;
      return state;
    default:
      return state;
  }
}

export default map;
