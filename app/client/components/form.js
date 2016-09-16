import React from 'react';
// import { Link } from 'react-router'; //router needs to be setup

const Form = React.createClass({

	getInitialState: function() {
    return {value: 'Hello!'};
  	},
  	handleChange: function(event) {
    this.setState({value: event.target.value});
  	},

	render() {

		return (
				<input type="text" value={this.state.value}
				onChange={this.handleChange}/>
		)
	}

});

export default Form;