import React from 'react';

export default class Riddle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
    const {riddle, pickUp} = this.props

    let riddlePrompt = function(riddle){
      if(riddle){
        var input = prompt(riddle.question, "?");
        if (input === riddle.answer){
          pickUp(riddle.reward)
          alert("Correct!")
        } else {
          alert("Wrong!")
        }
      }
    }
    if (riddle && !riddle.solved){
      return(
        <div className={riddle.className} onClick={riddlePrompt.bind(null, riddle)}>
          Riddle me this!
        </div>
      )
    }else {
      return(<div/>)
    }
  }
}
