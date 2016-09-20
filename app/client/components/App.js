require("../styles/stylesheet.css");
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as utilActions from '../actions/utilActions';
import * as battleActions from '../actions/battleActions';
import * as spellActions from '../actions/spellActions';
import * as enemyActions from '../actions/enemyActions';

import Main from './Main';

function mapStateToProps(state) {
  return {
    hero: state.hero,
    enemy: state.enemy,
    game: state.game
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...utilActions,
      ...battleActions,
      ...spellActions,
      ...enemyActions
    },
    dispatch
  );
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;