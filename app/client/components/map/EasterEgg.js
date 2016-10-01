import React from 'react';
import Sound from 'react-sound';

export default class EasterEgg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing:false
    }
  }

  render(){
    const {egg, soundEffect} = this.props

    let playStatus;
    if (this.state.playing) {
      playStatus = Sound.status.PLAYING
      setTimeout( ()=> this.state.playing = false,0)
    }
    console.log("egg.className",egg.className)
    return(
      <div className={egg.className}>
        <Sound
        url={egg.sound}
        playStatus={playStatus}
        playFromPosition={300}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying} />
        <img src={egg.image} onClick={()=>{
          this.state.playing = true
          soundEffect();
        }}/>
      </div>
    )
  }
}