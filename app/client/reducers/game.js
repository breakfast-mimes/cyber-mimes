import util from './util'
import defaultGame from '../data/game';

function game(state = [], action) {
  state = JSON.parse(JSON.stringify(state));
  if(action.message)
    state.log = [].concat(state.log, action.message)

  switch (action.type) {
    case "USER_LOGIN":
      state.logged = true;
      return state;

    case "USER_LOGOUT":
      state.logged = false;
      return state;

    case "USER_AUTH":
      state.logged = action.isAuth;
      return state;

    case "TOGGLE_LOGIN":
      state.login = action.isLogin;
      return state;

    case "CHANGE_ENEMY":
      state.enemyId = action.id;
      return state;

    case "LEADERBOARD":
      state.allChars = action.allChars;
      console.log('state',state)
      return state;

    case "LOG_SUCCESS":
      state.logSuccess = action.logSuccess;
      return state;

    case "USERNAME_SUCCESS":
      state.usernameSuccess = action.usernameSuccess;
      return state;

    case "USER_LOGOUT":
      state = defaultGame;
      return state;

    default:
      state.enemyTurn = !state.enemyTurn;
      return state;
  }
}

export default game;
