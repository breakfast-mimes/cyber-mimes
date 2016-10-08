  import React from 'react';
import { Link } from 'react-router';
import Sound from 'react-sound';
import Inventory from './Inventory'
import Riddle from './Riddle'
import Story from './Story'
import EasterEgg from './EasterEgg'
import Stats from './Stats'

var backgroundImages = {};
backgroundImages["artHere"] = require('./photos/artHere.png')
backgroundImages["start"] = require('./photos/start.png')
backgroundImages["findArtOnline"] = require('./photos/findArtOnline.png')
backgroundImages["office"] = require('./photos/office.jpg')
backgroundImages["code1"] = require('./photos/code1.png')
backgroundImages["code2"] = require('./photos/code2.png')
backgroundImages["sciFi"] = require('./photos/sciFi.jpg')
backgroundImages["code3"] = require('./photos/code3.png')
backgroundImages["fantasy"] = require('./photos/fantasy.jpg')
backgroundImages["wildWest"] = require('./photos/wildWest.jpg')
backgroundImages["dinosaurs"] = require('./photos/dinosaurs.jpg')
backgroundImages["cave"] = require('./photos/cave.png')
backgroundImages["trippy"] = require('./photos/trippy.jpg')

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
    const {map, hero, mapSend, enemy}  = this.props;
    const {images, items, enemyIds, features, easterEggs, riddles } = map

    let row = map.location.row
    let col = map.location.col

    let arrowRight = "http://i.imgur.com/MBUmoeF.png"
    let arrowLeft = "http://i.imgur.com/ztCX2UV.png"
    let arrowUp = "http://i.imgur.com/2rXcG5r.png"
    let arrowDown = "http://i.imgur.com/9gnJyue.png"

    let north = images[row - 1] ? images[row - 1][col] ? arrowUp : null : null
    let east = images[row] ? images[row][col + 1] ? arrowRight : null : null
    let south = images[row + 1] && row !==2 ? images[row + 1][col] ? arrowDown : null : null
    let west = images[row] ? images[row][col - 1] ? arrowLeft : null : null

    let image, item, itemName, enemyId, enemyName, feature, easterEgg, riddle;
    image = item = itemName = enemyId = enemyName = feature = easterEgg = riddle = undefined;

    if (images[row] && images[row][col]) {
      image = images[row][col];
      item = items[row][col];
      if (item){
        if(this.props.hero.inventory.filter((heroItem)=> heroItem.name === item.name )[0]){
          itemName = undefined;
        } else{
          itemName = item.name;
        }
      }
      enemyId = enemyIds[row][col];
      console.log("hero",hero)
      if(hero.battleFeatures[features[row][col]]) {
        feature = ""
      } else {
        feature = features[row][col];
      }
      easterEgg = easterEggs[row][col];
      riddle = riddles[row][col];
    }

    if(enemyId && enemy[enemyId].status.health > 0) {
      enemyName = enemy[enemyId].name
    } else if(row === 3 && col === 0){//infinite battle room
      for (var i in enemy) {
        if (enemy[i].status.health > 0){
          enemyId = i;
          enemyName = enemy[i].name;
          break;
        }
      }
    }
    console.log(enemy,"props enemy name")
    return(
      <div>
        <div id="map">
          {north ? <img id="north" src={north} width="150" height="150" onClick={this.props.goNorth} /> : null }
          {east ? <img id="east" src={east} width="150" height="150" onClick={this.props.goEast} /> : null }
          {south ? <img id="south" src={south} width="150" height="150" onClick={this.props.goSouth} /> : null}
          {west ? <img id="west" src={west} width="150" height="150" onClick={this.props.goWest} /> : null}
          <Riddle riddle={riddle} pickUp={this.props.pickUp}/>
          <div onClick={this.props.pickUp.bind(null, item)}>{itemName}</div>
          <div className={feature} onClick={this.props.pickUpFeature.bind(null, feature)}>{feature}</div>
          <div>
            {easterEgg ? (easterEgg).map((item) =>
              <EasterEgg egg={item} soundEffect={this.props.soundEffect} mapSend={mapSend}/>):undefined}
          </div>
          <Link className={enemyName} to='/battle' onClick={this.props.changeEnemy.bind(null, enemy, enemyId)}>{enemyName}</Link>
          <img id="background" src={backgroundImages[image]}/>
        </div>
        <div className='inv'><span className='storylineInvTitle'>Inventory</span>
          {(hero.inventory).map((item, i) =>
                <Inventory item={item} equip={this.props.equip} key={i} i={i}/>)}
        </div>
        <div className='mapStats'><span className='storylineInvTitle'>Stats</span>
          <Stats hero={hero}/>
        </div>
        <div className='story'><span className='storylineInvTitle'>Story</span>
          <Story row={row} col={col} messages={map.messages}/>
        </div>
      </div>
    )
  }
}
