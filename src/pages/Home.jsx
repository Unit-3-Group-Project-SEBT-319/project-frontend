import React from 'react';
import Categories from '../components/Categories/Categories';
import PlaylistCard from '../components/Playlist/PlaylistCard';

// To get all playlists and show under the "your library" on main page

const Home = () => {
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('http://localhost:4000/audify/playlists')
        setPlaylists(response.data)
      } catch (error) {
        console.error('Error fetching all playlists:', error)
      }
    }
    
    fetchPlaylists();
  }, [])


  return (
    <div>
      <div>
      <h2>Playlists</h2>
      {playlists.map(playlist => (
      <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
      </div>
      <Categories/>
    </div>
  );
};

export default Home;
