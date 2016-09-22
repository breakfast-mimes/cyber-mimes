import React from 'react';
import { Link } from 'react-router';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
    let images =[
    [{img:"http://bit.ly/2d4k9lv",item:"GREAT item here", description:"Descriptive1"},
    {img:"http://bit.ly/2deaWuc", description:"Descriptive2"},
    {img:"http://bit.ly/2cGimRX", description:"Descriptive3"}],
    [{img:"http://bit.ly/2cUn5lV", description:"Descriptive4"},
    {img:"http://bit.ly/2d4jS28", description:"Descriptive5"},
    {img:"http://bit.ly/2crqNnU", description:"Descriptive6"}],
    [{img:"http://bit.ly/2cGiroJ", description:"Descriptive7"},
    {img:"http://bit.ly/2dkDE8A", item:"ANOTHER ITEM?!", description:"Descriptive8"},
    {img:"http://bit.ly/2dcQUM4", description:"Descriptive9"}]]
    console.log(this.props.map)
    let map = this.props.map

    let row = map.location.row
    let col = map.location.col

    let north = images[row - 1] ? images[row - 1][col] ? images[row - 1][col].img : undefined : undefined
    let east = images[row] ? images[row][col + 1] ? images[row][col + 1].img : undefined : undefined
    let south = images[row + 1] ? images[row + 1][col] ? images[row + 1][col].img : undefined : undefined
    let west = images[row] ? images[row][col - 1] ? images[row][col - 1].img : undefined : undefined

    let cur;
    let item;
    let description;

    if (images[row] && images[row][col]) {
      cur = images[row][col].img;
      item = images[row][col].item;
      description = images[row][col].description;
    } else {
      cur = undefined;
      item = undefined;
      description = undefined;
    }

    return(
      <div id="map">
        <img id="north" src={north} width="150" height="150" onClick={this.props.goNorth} />
        <img id="east" src={east} width="150" height="150" onClick={this.props.goEast} />
        <img id="south" src={south} width="150" height="150" onClick={this.props.goSouth} />
        <img id="west" src={west} width="150" height="150" onClick={this.props.goWest} />
        <img src={cur} width="50" height="50" />
        <div >{description} </div>
        <div >{item} (needs onClick action to pick up and remove)</div>
        <Link to='/battle' onClick={this.props.changeEnemy.bind(null, this.props.enemy, 3)}>to battle!</Link>
      </div>
    )
  }
}
