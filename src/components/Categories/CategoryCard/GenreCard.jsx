import React from 'react';
import { Link } from 'react-router-dom';
import './genreCard.css';

const GenreCard = ({ genre, color }) => {
  return (
    <Link to={`/category/${genre}`} style={{ textDecoration: 'none' }}>
      <div className='card text-white genre-card' style={{ backgroundColor: color }}>
        <div className='card-body d-flex align-items-center justify-content-center'>
          {genre}
        </div>
      </div>
    </Link>
  );
};

export default GenreCard;
