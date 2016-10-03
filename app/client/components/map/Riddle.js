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
          alert("correct!")
        }
      }
    }
    if (riddle){
      return(
        <div className="riddle" onClick={riddlePrompt.bind(null, riddle)}>
          Riddle?
        </div>
      )
    }else {
      return(<div/>)
    }
  }
}
