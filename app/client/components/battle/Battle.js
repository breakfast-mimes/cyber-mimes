import React from 'react';
import { render } from 'react-dom';

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
      hero:{},
      enemy:{},
      enemyId:null,

    }
    setEnemy.call(this,0);
  }
  render(){
    let enemy = this.props.enemy[this.state.enemyId];
    let hero = this.props.hero;
    return(
      <div onClick = {scroll}>
        <button type="button" onClick = {setEnemy.bind(this,0)}>Click Me to fight a weak laZer enemy!</button>
        <button type="button" onClick = {setEnemy.bind(this,1)}>Click Me to fight a normal laZer enemy!</button>
        <button type="button" onClick = {setEnemy.bind(this,2)}>Click Me to fight a super laZer enemy</button>
        <progress id="enemyHealth" value={enemy.status.health} max="100">Enemy bar</progress>
        <div id="outLog">
          <div id="log">
            {
              this.state.log.map((line ,i)=> <p key={i}>{line}</p>)
            }
          </div>
        </div>
        <progress id="heroHealth" value={hero.status.health} max="100"></progress>
        <div onClick = {attack.bind(this)}>
          Attack!
        </div>
        <div>
          Defend!
        </div>
        <div onClick={showMenu.bind(null,'items')}>
          Items
        </div>

        <div onClick = {cry.bind(this)}>
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
          <div onClick={fireball.bind(this)} id="fireball">
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

/*
Each action needs 3 things
udate log to say what happened, in an array,
set hero action, to set the hero's action,
set enemy action to set enemies action
TURNS WILL ONLY PROGRESS IF ENEMY ACTION IS SET, AND IT NEEDS TO BE SET LAST
if you want the enemy or hero to do nothing, set it to null
*/
function cry() {
  setHeroAction.call(this,this.props.cry);
  updateLog.call(this,["you cry and cower in the corner as you beg whatever god that exists to smite the demon creature","they murder you dead"])
  setEnemyAction.call(this,this.props.enemyMurder);
}

function attack() {
  updateLog.call(this,["you attack","the enemy attacks!"])
  setHeroAction.call(this,this.props.attack.bind(null, this.props.hero, this.props.enemy[this.state.enemyId]));
  setEnemyAction.call(this,this.props.attack.bind(null,this.props.enemy[this.state.enemyId],this.props.hero));
}

function fireball() {
  updateLog.call(this,["you throw a giant fireball","the enemy cowers!"])
  setHeroAction.call(this,this.props.fireball.bind(null, this.props.hero, this.props.enemy[this.state.enemyId]));
  setEnemyAction.call(this,null)

}


/*
  non character functions, so they don't need to progress the turn system
*/

function setEnemy(id) {
  updateLog.call(this,["your fightin a " + this.props.enemy[id].name])
  this.state.enemyId = id;
  this.props.render();
}

function nextTurn() {
  this.state.hero.performAction();
  this.state.enemy.performAction ? this.state.enemy.performAction() : null;
}

function setHeroAction(action) {
  this.state.hero.performAction = action;
}

function setEnemyAction(action) {
  this.state.enemy.performAction = action
  nextTurn.call(this);

}

function updateLog(messageArr) {
  messageArr.forEach((message)=>this.state.log.push(message))
  console.log("log",this.state.log)
}
