require("../styles/stylesheet.css");
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import * as battleActions from '../actions/battleActions';
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
  return bindActionCreators({...actionCreators, ...battleActions, ...mapActions}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;