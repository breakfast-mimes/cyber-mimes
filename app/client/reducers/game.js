import util from './util'

function game(state = [], action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {

    default:
      state.enemyTurn = !state.enemyTurn;
      if(action.message)
        state.log = [].concat(state.log, action.message)
      return state;
  }
}

export default game;
