import util from './util';
import defaultMap from '../data/map';

function map(state = [], action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "MAP_SEND":
      state.location.row = action.coordinates[0]
      state.location.col = action.coordinates[1]
      return state

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

    case "PICK_UP":
      state.riddles[state.location.row][state.location.col].solved = true
      return state;

    case "USER_LOGOUT":
      state = defaultMap;
      return state;

    default:
      return state;
  }
}

export default map;
