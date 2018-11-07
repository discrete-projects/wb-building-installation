import React from 'react';
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react';

const Video = (props) => {
  console.log(props.src);
  return (
    <Player
      fluid
      autoPlay="true"
      aspectRatio="16:9"
      playsInline
      src={props.src[0]}
    >
      <ControlBar
        disableCompletely="true"
        autoHide={false}
        className="my-class"
      />
    </Player>
  );
};

export default Video;
