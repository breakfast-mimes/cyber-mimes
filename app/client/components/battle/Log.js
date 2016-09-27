import React from 'react';

const Log = React.createClass({
  render() {
    let {style} = this.props
    scroll();
    return (
      <div style={style} id="outLog">
        <div id="log">
          {this.props.log.map((line ,i)=> <div className="logMessage" key={i}>{i + 1 + ": " + line}</div>)}
        </div>
      </div>
    )
  }
})

function scroll(){
  setTimeout(() => {document.getElementById('log').scrollTop = document.getElementById('log').scrollHeight} , 100)
}

export default Log;