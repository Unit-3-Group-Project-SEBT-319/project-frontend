import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { SongPlayerContext } from '../SongPlayer/SongPlayerContext';
import './PlayMusicButton.css'

const PlayMusicButton = ({ song }) => {
  const { setPlayingSong } = useContext(SongPlayerContext);

  if (!setPlayingSong) {
    console.error('setPlayingSong is not defined in SongPlayerContext');
    return null;
  }

  return (
    <button onClick={() => setPlayingSong(song)} className="play-music-button">
    <FontAwesomeIcon icon={faPlay} />
    </button>
  );
};

export default PlayMusicButton;
