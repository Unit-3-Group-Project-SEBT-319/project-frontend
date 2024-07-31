import React from 'react';
import { Link } from 'react-router-dom';
import './genreCard.css';

const GenreCard = ({ genre, image }) => {
  return (
    <div className='genre-card-container'>
      <Link to={`/category/${genre}`} style={{ textDecoration: 'none' }}>
        <div className='card text-white genre-card'>
          <div className='card-body d-flex flex-column align-items-center justify-content-center'>
            <img src={image} alt={genre} className='genreimages mb-2' />
            <div className='genre-text'>{genre}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GenreCard;
