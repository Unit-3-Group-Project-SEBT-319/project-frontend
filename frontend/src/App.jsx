import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import CategoryShowPage from './pages/CategoryShowPage';
import Categories from './Categories/Categories';
import CreatePlaylist from './pages/CreatePlaylist';
import UpdatePlaylist from './pages/UpdatePlaylist';
import DeletePlaylist from './pages/DeletePlaylist';
import AddSong from './pages/AddSong';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route path="/category/:genre" component={CategoryShowPage} />
        <Route path="/playlist/:id" component={Playlist} />
        <Route path="/create-playlist" component={CreatePlaylist} />
        <Route path="/update-playlist/:id" component={UpdatePlaylist} />
        <Route path="/delete-playlist/:id" component={DeletePlaylist} />
        <Route path="/playlist/:playlistId/add-song" component={AddSong} />
      </Switch>
    </Router>
  );
};

export default App;
