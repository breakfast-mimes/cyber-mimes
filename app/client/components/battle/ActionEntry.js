import React from 'react';
import Sound from 'react-sound';

const ActionEntry = React.createClass({

  getInitialState() {
    return {
      playing: false
    }
  },

  render() {
    const {action, hero, enemy, id, actions} = this.props
    let playStatus;
    if (this.state.playing) {
      playStatus = Sound.status.PLAYING
      setTimeout( ()=> this.state.playing = false,30)

    } else {
      // playStatus = Sound.status.STOPPED
    }
    console.log(action)
    return (
      <div className="actionEntry noSelect">
       <Sound
          url={hero.battleActionSounds[action]}//take off last 3 for a sound effect
          playStatus={playStatus}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying} />
        <div onClick={() => {
            this.state.playing = true;
            hero.status.health && enemy[id].status.health> 0 ? this.props[action](hero, enemy, id) : null
          }
        }>
          {actions[action]}
        </div>
      </div>
    )
  }
})

export default ActionEntry;