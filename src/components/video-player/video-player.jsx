import React, {useEffect, useRef, useState} from "react";
import PropTypes from 'prop-types';

const VideoPlayer = ({
  autoPlay = false,
  controls = false,
  poster,
  src,
  width,
  height,
  preload = `auto`,
  isPlaying = false,
  muted = true,
}) => {
  const [, setIsLoading] = useState(true);

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => setIsLoading(false);

    return (() => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
    });
  }, [src]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    }

    return (() => {
      videoRef.current.pause();
    });
  }, [src]);

  return (
    <video
      autoPlay={autoPlay}
      controls={controls}
      poster={poster}
      preload={preload}
      width={width}
      muted={muted}
      height={height}
      ref={videoRef}
    >
      <source
        src={src}
        type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
      ></source>
    </video>
  );
};

VideoPlayer.propTypes = {
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  preload: PropTypes.bool,
  isPlaying: PropTypes.bool,
  muted: PropTypes.bool,
};

export default VideoPlayer;
