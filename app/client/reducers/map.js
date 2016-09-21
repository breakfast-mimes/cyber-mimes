import util from './util'

function map(state = [], action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "GO_SOUTH":
      state.locationY -= 1;
      return state;
    case "GO_NORTH":
      state.locationY += 1;
      return state;

    default:
      return state;
  }
}

export default map;
