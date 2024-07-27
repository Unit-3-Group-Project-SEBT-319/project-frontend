import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistCard = ({ playlist }) => (
    <div>
        <img src={playlist.image} alt={playlist.name} />
        <h2>{playlist.name}</h2>
        <Link to={`/playlist/${playlist.id}`}>View</Link>
        </div>
)

export default PlaylistCard
