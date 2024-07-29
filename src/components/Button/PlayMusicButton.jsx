import { useContext } from 'react';
import { SongPlayerContext } from '../SongPlayer/SongPlayerContext';

const PlayMusicButton = ({ song }) => {
  const { setPlayingSong } = useContext(SongPlayerContext);

  if (!setPlayingSong) {
    console.error('setPlayingSong is not defined in SongPlayerContext');
    return null;
  }

  return (
    <button onClick={() => setPlayingSong(song)} className="play-music-button">
      Play
    </button>
  );
};

export default PlayMusicButton;
