import React, { useContext, useEffect } from 'react';
import { SongPlayerContext } from '../SongPlayer/SongPlayerContext';
import CustomAudioPlayer from './CustomAudioPlayer';
import './nowplaying.css';
import defaultSongImage from '/pictures/defaultsong.png';

const defaultSong = {
  trackId: 0,
  trackName: "No song playing",
  artistName: "...",
  artworkUrl100: defaultSongImage,
  previewUrl: "https://music.apple.com/us/artist/rick-astley/669771?uo=4"
};

const NowPlaying = () => {
  const { playingSong, playing, setPlaying, audioRef } = useContext(SongPlayerContext);

  const songToDisplay = playingSong || defaultSong;

  return (
    <div className="now-playing">
      <div className="nowplaying-info">
        <img src={songToDisplay.artworkUrl100.replace('100x100', '1000x1000')} alt={songToDisplay.trackName} className="nowplaying-img" />
        <div className="nowplaying-text">
          <h2 className="nowplaying-title">{songToDisplay.trackName}</h2>
          <h4 className="nowplaying-artist">{songToDisplay.artistName}</h4>
        </div>
      </div>
      {songToDisplay.previewUrl && (
        <div className="audio-player-wrapper">
          <CustomAudioPlayer url={songToDisplay.previewUrl} playing={playing} setPlaying={setPlaying} ref={audioRef} />
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
