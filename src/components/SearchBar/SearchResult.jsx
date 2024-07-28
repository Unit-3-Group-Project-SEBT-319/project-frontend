import React, { useState, useEffect } from 'react';
import AddToPlayListButton from '../Button/AddToPlayListButton';
import "./searchresult.css";

const SearchResult = ({ result }) => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await fetch('http://localhost:4000/audify/playlists');
                const data = await response.json();
                setPlaylists(data.data);
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        fetchPlaylists();
    }, []);
    
    const songData = {
        wrapperType: result.wrapperType,
        kind: result.kind,
        artistId: result.artistId,
        collectionId: result.collectionId,
        trackId: result.trackId,
        artistName: result.artistName,
        collectionName: result.collectionName,
        trackName: result.trackName,
        collectionCensoredName: result.collectionCensoredName,
        trackCensoredName: result.trackCensoredName,
        artistViewUrl: result.artistViewUrl,
        collectionViewUrl: result.collectionViewUrl,
        trackViewUrl: result.trackViewUrl,
        previewUrl: result.previewUrl,
        artworkUrl30: result.artworkUrl30,
        artworkUrl60: result.artworkUrl60,
        artworkUrl100: result.artworkUrl100,
        collectionPrice: result.collectionPrice,
        trackPrice: result.trackPrice,
        releaseDate: result.releaseDate,
        collectionExplicitness: result.collectionExplicitness,
        trackExplicitness: result.trackExplicitness,
        discCount: result.discCount,
        discNumber: result.discNumber,
        trackCount: result.trackCount,
        trackNumber: result.trackNumber,
        trackTimeMillis: result.trackTimeMillis,
        country: result.country,
        currency: result.currency,
        primaryGenreName: result.primaryGenreName,
        contentAdvisoryRating: result.contentAdvisoryRating,
        isStreamable: result.isStreamable
    };

    return (
        <div className="d-flex align-items-center p-2">
            <img src={result.artworkUrl300 || result.artworkUrl100} alt={result.trackName} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
            <div className="flex-grow-1 mx-2">
                <h5 className="mb-0">{result.trackName}</h5>
                <p className="mb-0 text-secondary artist-name">{result.artistName}</p>
            </div>
            <p className="mb-0 text-muted">{result.primaryGenreName}</p>
            <AddToPlayListButton
                songId={result.trackId}
                songData={songData}
                playlists={playlists}
                onSuccess={(updatedPlaylist) => {
                    console.log('Song added to playlist:', updatedPlaylist);
                }}
            />
        </div>
    );
};

export default SearchResult;
