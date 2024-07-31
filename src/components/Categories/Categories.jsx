import React from 'react';
import GenreCard from './CategoryCard/GenreCard';
import './categories.css';

const Categories = () => {
  const genres = [
    { name: 'Pop', color: '#ff6666' },
    { name: 'Jazz', color: '#ffcc66' },
    { name: 'Alternative', color: '#66ff66' },
    { name: 'Metal', color: '#6666ff' },
    { name: 'Country', color: '#ff66cc' },
    { name: 'Rock', color: '#66ccff' },
  ];

  return (
    <div className='container'>
      <div className='row'>
        {genres.map((genre) => (
          <div className='col-md-4 mb-4' key={genre.name}>
            <GenreCard genre={genre.name} color={genre.color} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
