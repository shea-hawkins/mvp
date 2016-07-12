import React from 'react';
import ytIframe from 'youtube-iframe';
import { connection } from './model';
// youtube player returns a promise for
// ever API function.

// youtube player emits events on any
// API event.

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    ytIframe.load((youtube) => {
      this.player = new youtube.Player('youtube', {
          height: '390',
		      width: '640',
		      videoId: this.props.current,
          events: {
            onStateChange: this.playerStateChange
          }
      });
    });
  }
  playerStateChange({ data }) {
    if (data === 1) {
      this.props.play();
    } else if (data === 2) {
      this.props.pause();
    }
  }
  render() {
    return (
      <div id="youtube" />
    );
  }
};

export default connection(VideoPlayer);