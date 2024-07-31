import React, { useState, useRef, forwardRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './customAudioPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const CustomAudioPlayer = forwardRef(({ url, playing, setPlaying }, ref) => {
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const playerRef = useRef(null);

  const togglePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const handleSeekChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setPlayed(newValue);
    playerRef.current.seekTo(newValue);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    if (ref) {
      ref.current = playerRef.current;
    }
  }, [ref]);

  return (
    <div className="custom-audio-player">
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        volume={volume}
        onProgress={handleProgress}
        onDuration={handleDuration}
        height="0px"
        width="0px"
      />
      <div className="controls">
        <FontAwesomeIcon
          icon={playing ? faPause : faPlay}
          onClick={togglePlayPause}
          className="control-icon play-pause-button"
        />
        <div className="time-controls">
          <span>{formatTime(played * duration)}</span>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onChange={handleSeekChange}
            className="seek-slider"
          />
          <span>{formatTime(duration)}</span>
        </div>
        <div className="volume-controls">
          <FontAwesomeIcon icon={faVolumeUp} className="control-icon" />
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>
    </div>
  );
});

export default CustomAudioPlayer;

