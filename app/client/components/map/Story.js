import React from 'react';

export default class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
    const { row, col, messages} = this.props;
    return(
      <div className='noSelect'>
        {messages[row] ? messages[row][col] : "No Messages"}
      </div>
    )
  }
}