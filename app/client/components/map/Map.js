import React from 'react';
import { Link } from 'react-router';
import Sound from 'react-sound';
import Inventory from './Inventory'

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
    //http://i.imgur.com/ILKppDH.png , mountain
    //

    let images =[
    [{img:"http://bit.ly/2d4k9lv",item:{name: "god-tier Sword", type: "meele", dmg: 12, stat: "str", equip: "rightHand"}, description:"Descriptive1" , enemy: "3", feature:"healthBar"},
    {img:"http://bit.ly/2deaWuc", description:"Descriptive2", enemy: "2",feature:"inventory"},
    {img:"http://bit.ly/2cGimRX", description:"Descriptive3", enemy: "1",feature:"items"}],
    [{img:"http://bit.ly/2cUn5lV", description:"Descriptive4", enemy: "0",feature:"spells"},
    {img:"http://bit.ly/2d4jS28", description:"Descriptive5",feature:"actions"},
    {img:"http://bit.ly/2crqNnU", description:"Descriptive6"}],
    [{img:"http://bit.ly/2cGiroJ", description:"Descriptive7"},
    {img:"http://bit.ly/2dkDE8A", item:"ANOTHER ITEM?!", description:"Descriptive8"},
    {img:"http://bit.ly/2dcQUM4", description:"Descriptive9"}]]
    let map = this.props.map

    let row = map.location.row
    let col = map.location.col

    let north = images[row - 1] ? images[row - 1][col] ? images[row - 1][col].img : undefined : undefined
    let east = images[row] ? images[row][col + 1] ? images[row][col + 1].img : undefined : undefined
    let south = images[row + 1] ? images[row + 1][col] ? images[row + 1][col].img : undefined : undefined
    let west = images[row] ? images[row][col - 1] ? images[row][col - 1].img : undefined : undefined

    let cur;
    let item;
    let itemName;
    let description;
    let enemyId;
    let enemyName = undefined;
    let feature;
    if (images[row] && images[row][col]) {
      cur = images[row][col].img;
      item = images[row][col].item;
      if (item){
        if(this.props.hero.inventory.filter((heroItem)=> heroItem.name === item.name )[0]){
          itemName = undefined;
        } else{
          itemName = item.name;
        }
      }
      description = images[row][col].description;
      enemyId = images[row][col].enemy;
      feature = images[row][col].feature;
    } else {
      cur = undefined;
      item = undefined;
      itemName = undefined;
      description = undefined;
      enemyId = undefined;
      feature = undefined;
    }
    if(enemyId && this.props.enemy[enemyId].status.health > 0) {
      enemyName = this.props.enemy[enemyId].name
    }

    if(this.props.battle[feature]) {
      feature = ""
    }
    // console.log(enemyId, enemyName)
    let hero = this.props.hero
    return(
      <div>
        <Sound
          url="https://a.clyp.it/tvqmc3wf.mp33"//take off last 3 for a sound effect
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying} />
        <div id="map">
          <img id="north" src={north} width="150" height="150" onClick={this.props.goNorth} />
          <img id="east" src={east} width="150" height="150" onClick={this.props.goEast} />
          <img id="south" src={south} width="150" height="150" onClick={this.props.goSouth} />
          <img id="west" src={west} width="150" height="150" onClick={this.props.goWest} />
          <img src={cur} width="50" height="50" />
          <div> {description} </div>
          <div onClick ={this.props.pickUp.bind(null, item)}>{itemName} </div>
          <div onClick={this.props.pickUpFeature.bind(null, feature)}>{feature} </div>
          <Link to='/buildbattle' onClick={this.props.changeEnemy.bind(null, this.props.enemy, enemyId)}>{enemyName}</Link>
        </div>
        <div className='inv'>
          {(hero.inventory).map((item, i) =>
                <Inventory item={item} key={i} i={i}/>)}
        </div>
      </div>
    )
  }
}

