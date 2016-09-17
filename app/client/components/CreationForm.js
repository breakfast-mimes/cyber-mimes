import React from 'react';
// import { Link } from 'react-router'; //router needs to be setup

const CreationForm = React.createClass({
	getInitialState: function() {
    return {
    	value: 'test',
    	count: 0};
  },

 	handleChange: function(event) {
    this.setState({value: event.target.count});
    console.log('HANDLE CHANGE',event.target.count);
  },

  incrementCount: function(){

    this.setState({
      count: this.state.count + 1
    });
  },

  decrementCount: function(){

    this.setState({
      count: this.state.count - 1
    });
  },

	render() {

		return (
			<div>
				<div id = 'character'>

		      Insert Character Name

					<input type="text" value={this.state.value}
					onChange={this.handleChange}/>
				</div>

					<div id = 'stats'>
		         <h1>STATS</h1>

		          <h2>Intelligence</h2>

						<button type = 'button' onClick={this.incrementCount}>+</button>
						<div id = 'intelligence'>{this.props.hero.stats.int} </div>
						<button type="button" onClick={this.decrementCount}>-</button>


						<h2>Dexterity</h2> 
						<button type="button" onClick={this.incrementCount}>+</button>
						<div>{this.state.count} </div>
						<button type="button" onClick={this.decrementCount}>-</button>

						<h2>Strength</h2> 

						<button type="button" onClick={this.incrementCount}>+</button>
						<div>{this.state.count} </div>
						<button type="button" onClick={this.decrementCount}>-</button>


					</div>

				<div id ='skills'>

				 	<h1>SKILLS</h1>

		          <h2>Fighting</h2>
		        <button type="button" onClick={this.incrementCount}>+</button>
						<div>{this.state.count} </div>
						<button type="button" onClick={this.decrementCount}>-</button>

							<h2>Shooting</h2>
						<button type="button" onClick={this.incrementCount}>+</button>
						<div>{this.state.count} </div>
						<button type="button" onClick={this.decrementCount}>-</button>

							<h2>Magic</h2>
						<button type="button" onClick={this.incrementCount}>+</button>
						<div>{this.state.count} </div>
						<button type="button" onClick={this.decrementCount}>-</button>


				</div>
			</div>

		)
	}
})

export default CreationForm; //use connect here? no, its already connected in the parent component

