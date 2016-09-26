require("../styles/stylesheet.css");
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as utilActions from '../actions/utilActions';
import * as battleActions from '../actions/battleActions';
import * as spellActions from '../actions/spellActions';
import * as heroActions from '../actions/heroActions';
import * as enemyActions from '../actions/enemyActions';
import * as mapActions from '../actions/mapActions';
import * as startMapActions from '../actions/startMapActions';

import Main from './Main';

function mapStateToProps(state) {
  return {
    hero: state.hero,
    enemy: state.enemy,
    game: state.game,
    startMap: state.startMap,
    map: state.map,
    battle: state.battle
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...utilActions,
      ...battleActions,
      ...spellActions,
      ...heroActions,
      ...enemyActions,
      ...mapActions,
      ...startMapActions
    },
    dispatch
  );
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;