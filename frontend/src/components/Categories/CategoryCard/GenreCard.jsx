import React from 'react';
import { Link } from 'react-router-dom';

const GenreCard = ({ genre, color }) => {
  return (
    <Link to={`/category/${genre}`} style={{ textDecoration: 'none' }}>
      <div
        className='genre-card'
        style={{ backgroundColor: color }}
      >
        {genre}
      </div>
    </Link>
  );
};

export default GenreCard;

