import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PlaylistHeader from '../components/Playlist/PlaylistHeader';
import SongList from '../components/Playlist/SongList';

const Playlist = () => {
    return (
        <div>
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    <PlaylistHeader />
                    <SongList />
                </div>
            </div>
        </div>
    );
};

export default Playlist;