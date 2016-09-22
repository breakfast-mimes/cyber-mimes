import util from './util'

function game(state = [], action) {
  state = JSON.parse(JSON.stringify(state));
  if(action.message)
    state.log = [].concat(state.log, action.message)

  switch (action.type) {

    case "CHANGE_ENEMY":
      state.enemyId = action.id;
      return state;

    default:
      state.enemyTurn = !state.enemyTurn;
      return state;
  }
}

export default game;
