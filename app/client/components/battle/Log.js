import React from 'react';

const Log = React.createClass({
  render() {
    return (
      <div id="outLog">
        <div id="log">
          {this.props.log.map((line ,i)=> <div className="logMessage" key={i}>{i + 1 + ": " + line}</div>)}
        </div>
      </div>
    )
  }
})

export default Log;