import React from 'react';

export default class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
    const { row, col, messages} = this.props;
    console.log(this.props)
    return(
      <div>
        {messages[row][col]}
      </div>
    )
  }
}