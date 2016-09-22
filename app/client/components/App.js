require("../styles/stylesheet.css");
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as utilActions from '../actions/utilActions';
import * as battleActions from '../actions/battleActions';
import * as spellActions from '../actions/spellActions';
import * as enemyActions from '../actions/enemyActions';
import * as mapActions from '../actions/mapActions';

import Main from './Main';

function mapStateToProps(state) {
  return {
    hero: state.hero,
    enemy: state.enemy,
    game: state.game,
    map: state.map
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...utilActions,
      ...battleActions,
      ...spellActions,
      ...enemyActions,
      ...mapActions
    },
    dispatch
  );
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;