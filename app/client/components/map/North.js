import React from 'react';
import { Link } from 'react-router';
import South from './South';


export default class North extends React.Component {

  render(){
    console.log(this.props)
    let imgs = [
      "//placebacon.net/200/150",
      "//placebacon.net/300/300",
      "//placebacon.net/400/400",
      "//placebacon.net/800/800"
    ]
    return(
      <div>
        North
        <img src={imgs[2]} onClick={goSouth.bind(this)} />
      </div>
    )
  }
}


function goSouth (){
  console.log(this)
  this.props.switchPage('south')
  this.props.render()
}

// var North = React.createClass({

//   renderPage: function(page){
//     if(page === 'south'){
//       return <South/>;
//     }
//     return <South/>;
//   },

//   handleClick: function(page){
//     if(page === 'south') {

//       this.props.switchPage(South);
//     }
//   },

//   render: function(){
// console.log(this,"histher")
//     let imgs = [
//       "//placebacon.net/200/150",
//       "//placebacon.net/300/300",
//       "//placebacon.net/400/400",
//       "//placebacon.net/800/800"
//     ]
//     return(
//       <div>
//         North
//         <img src={imgs[1]} onClick={() => this.handleClick('south')}/>
//         {this.renderPage(this.props.page)}
//       </div>
//     )
//   }
// })