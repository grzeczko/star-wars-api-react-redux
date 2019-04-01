import React, { Component } from 'react'
import soundfile from '../../audio/Chewbacca.mp3'
import Sound from 'react-sound'

export default class Chewbacca extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sound: false
    }
  }

  chewbaccaSound = e => {
    this.setState({
      ...this.state,
      sound: true
    })
    console.log("Play sound.");
  }

  componentDidMount() {
    document.getElementsByClassName("chewbacca")[0].addEventListener('webkitAnimationEnd', this.chewbaccaSound);
  }

  componentWillUnmount() {
    document.getElementsByClassName("chewbacca")[0].removeEventListener('webkitAnimationEnd', this.chewbaccaSound);
  }

  render () {
    return (
        <div>
          <img src="images/chewbacca.png" className="chewbacca slide" />
          {this.state.sound &&
            <Sound url={soundfile} playStatus={Sound.status.PLAYING} />
          }
        </div>
    );
  }
}
