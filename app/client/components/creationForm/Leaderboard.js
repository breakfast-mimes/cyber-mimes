import React from 'react';
import { Link } from 'react-router';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';




const Leaderboard = React.createClass({
// {results.map((char,i)=>
// <li key={i}>{"character name: " + char.charactername +  "  level " + char.level}</li>)}

	componentWillMount() {
	this.props.getAllCharacters();
	},


	render() {

					let results = this.props.game.allChars;
					results.sort(function(obj1,obj2){
					return obj2.level - obj1.level;})
						console.log('RESULTS',results);


			return (
				<div>


			 <h1 className='leaderBoard'>Leaderboard</h1>
			 <h2 className='search'>Search</h2>


		<div className='bootstrapTable'>
			<BootstrapTable className='table' trClassName= 'tableRow' data={results}

					search={true}
					striped={true}
					hover={true}
					searchPlaceholder="Character Name"
					>
		      <TableHeaderColumn className='header' dataField="charactername" isKey={true} dataAlign='center' width='100'>Character Name</TableHeaderColumn>
		      <TableHeaderColumn className='header' dataField="level" dataSort={true} >Level</TableHeaderColumn>
  		</BootstrapTable>
		</div> 
				</div>

			)
	}

})

export default Leaderboard;



         