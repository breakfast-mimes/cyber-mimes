import React from 'react';
import { render } from 'react-dom';

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
      hero:{},
      enemy:{},
      enemyId:0,
      inProgress:true

    }

  }
  render(){
    let enemy = this.props.enemy[this.state.enemyId];
    let hero = this.props.hero;
    return(
      <div onClick = {scroll}>
        <button type="button" onClick = {setEnemyId.bind(this,0)}>Click me to fight a weak laZer enemy</button>
        <button type="button" onClick = {setEnemyId.bind(this,1)}>Click me to fight a normal laZer enemy!</button>
        <button type="button" onClick = {setEnemyId.bind(this,2)}>Click me to fight a super laZer enemy</button>
        <progress id="enemyHealth" value={enemy.status.health} max="100">Enemy bar</progress>
        <div id="outLog">
          <div id="log">
            {
              this.state.log.map((line ,i)=> <p key={i}>{line}</p>)
            }
          </div>
        </div>
        <progress id="heroHealth" value={hero.status.health} max="100"></progress>
        <div onClick = {loop.bind(this,'attack')}>
          Attack!
        </div>
        <div>
          Defend!
        </div>
        <div onClick={showMenu.bind(null,'items')}>
          Items
        </div>

        <div onClick = {loop.bind(this,'cry')}>
          Cry
        </div>

        <div onClick={showMenu.bind(null,'magics')}>
          MAGIC
        </div>
        <div id="items">
          Itemss
        </div>
        <div id="magics">
          MAGIC?!
          <div onClick={loop.bind(this,'fireball')} id="fireball">
            fireball
          </div>
        </div>
    </div>
    )
  }
}
function scroll(){
  setTimeout(() => {document.getElementById('log').scrollTop = document.getElementById('log').scrollHeight} , 100)
}

var menuArr = [false,'none']
function showMenu(menu) {
  var displayString = document.getElementById(menu).style.display
  if (displayString === "block"){
    document.getElementById(menu).style.display = "none"
    menuArr[0] = false;
    menuArr[1] = 'none';
    return
  } else if (menuArr[0]){
    document.getElementById(menuArr[1]).style.display = "none"
  }
  document.getElementById(menu).style.display = "block"
  menuArr[0] = true;
  menuArr[1] = menu;

}

function loop(f){
  if(this.props.enemy[this.state.enemyId].status.health > 0) {

    if (f === 'cry') {
      updateLog.call(this,["you cry and cower in the corner as you beg whatever god that exists to smite the demon creature","they murder you dead"])
      this.props.cry()
      this.props.enemyMurder();
    } else if (f === 'attack') {
      updateLog.call(this,["you attack","the enemy attacks!"])
      this.props.attack(this.props.hero, this.props.enemy[this.state.enemyId])
      this.props.attack(this.props.enemy[this.state.enemyId],this.props.hero)
    } else if(f === 'fireball') {
      updateLog.call(this,["you throw a giant fireball","the enemy cowers!"])
      this.props.fireball(this.props.hero, this.props.enemy[this.state.enemyId])
    }

    setTimeout(() => {
      if (this.props.enemy[this.state.enemyId].status.health <= 0) {
        console.log("he dead")
        updateLog.call(this,["Congrats! you have slain the beast, pick another enemy"])
      }

      if (this.props.hero.status.health <= 0) {
        updateLog.call(this,["oh no! You've taken fatal damage!", "But wait, your guardian angel came and save you", "...and took half your gold"])
        this.props.heal(100, this.props.hero)
      }
    }, 0)
  }

}

function setEnemyId(id) {
  updateLog.call(this,["your fightin a " + this.props.enemy[id].name])
  this.state.enemyId = id;
  this.props.render();
}

function updateLog(messageArr) {
  messageArr.forEach((message)=>this.state.log.push(message))
  this.props.render();
}
