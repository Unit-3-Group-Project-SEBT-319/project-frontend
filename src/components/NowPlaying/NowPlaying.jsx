import React, { useContext } from 'react';
import { SongPlayerContext } from '../SongPlayer/SongPlayerContext';
import CustomAudioPlayer from './CustomAudioPlayer';
import './nowplaying.css';

const NowPlaying = () => {
  const { playingSong } = useContext(SongPlayerContext);

  return (
    <div className="nowplaying-container row">
      <div className="nowplaying-info col-12 col-md-4">
        <img src={playingSong.artworkUrl100.replace('100x100', '1000x1000')} alt={playingSong.trackName} className="nowplaying-img" />
        <div className="nowplaying-text">
          <h2 className="nowplaying-title">{playingSong.trackName}</h2>
          <h4 className="nowplaying-artist">{playingSong.artistName}</h4>
        </div>
      </div>
      {playingSong.previewUrl && (
        <div className="audio-player-wrapper col-12 col-md-8">
          <CustomAudioPlayer url={playingSong.previewUrl} />
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
