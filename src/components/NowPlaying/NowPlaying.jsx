import React, { useContext } from 'react';
import { SongPlayerContext } from '../SongPlayer/SongPlayerContext';
import CustomAudioPlayer from './CustomAudioPlayer';
import './nowplaying.css';
import defaultSongImage from '/pictures/defaultsong.png'; 

const defaultSong = {
  trackId: 0,
  trackName: "No song playing",
  artistName: "...",
  artworkUrl100: defaultSongImage,
  previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/48/8f/a4/488fa4b5-b606-71ee-572e-691f840503c8/mzaf_15586272016916254191.plus.aac.p.m4a"
};

const NowPlaying = () => {
  const { playingSong } = useContext(SongPlayerContext);

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
          <CustomAudioPlayer url={songToDisplay.previewUrl} />
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
