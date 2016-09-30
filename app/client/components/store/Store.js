import React from 'react';
import Entry from './Entry'
import { weapons, head, body } from '../../data/items.js'

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weapons,
      head,
      body
    }
  }
  render(){
    let hero = this.props.hero
    return(
      <div>
        <span>Weapons</span>
        {Object.keys(this.state.weapons).map((item, i) => {
            return (<div onClick={()=> {
              if(hero.status.gold >=  this.state.weapons[item].value){
                this.props.buyItem(this.state.weapons[item]);
                delete this.state.weapons[item];
              }
              }
            }><Entry equipment={weapons[item]} /></div>)
          })
        }

        <span>Inventory</span>
        {Object.keys(hero.inventory).map((item, i) => {
            return (<div onClick={()=> {
                console.log(item[i])
                this.props.sellItem(hero.inventory[item]);
                let flag = false;
                for (var i in this.state.weapons){
                  if (this.state.weapons[i].name === hero.inventory[item].name){
                    flag = true
                  }
                }

                if (!flag){
                  this.state.weapons[hero.inventory[item].name] = hero.inventory[item];
                }
              }
            }><Entry equipment={hero.inventory[item]} /></div>)
          })
        }


      </div>
    )
  }
}