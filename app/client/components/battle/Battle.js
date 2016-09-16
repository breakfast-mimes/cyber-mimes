import React from 'react';
import { render } from 'react-dom';

export default class Battle extends React.Component {

  render(){

    var style = {height:"100px",width:"140px",overflow:"auto",border:"8px solid red",padding:"2%"}
    return(
      <div>

        <div style= {style}>
          This scroll box has had a border added to it. You can add borders to anything in HTML - including scroll boxes.
        </div>
        <progress id="health" value="100" max="100"></progress>
        <div>
          Attack!
        </div>
        <div>
          Defend!
        </div>
        <div>
          Items
        </div>
        <div>
          Cry
        </div>
        <div>
          MAGIC?!
        </div>
    </div>
    )
  }
}
