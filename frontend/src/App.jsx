import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Category from './pages/Category';
import CreatePlaylist from './pages/CreatePlaylist';
import UpdatePlaylist from './pages/UpdatePlaylist';
import DeletePlaylist from './pages/DeletePlaylist';
import AddSong from './pages/AddSong';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/playlist/:id" component={Playlist} />
        <Route path="/category/:id" component={Category} />
        <Route path="/create-playlist" component={CreatePlaylist} />
        <Route path="/update-playlist/:id" component={UpdatePlaylist} />
        <Route path="/delete-playlist/:id" component={DeletePlaylist} />
        <Route path="/playlist/:playlistId/add-song" component={AddSong} />
      </Switch>
    </Router>
  );
};

export default App;
