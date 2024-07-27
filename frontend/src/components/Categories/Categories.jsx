import React from 'react';
import GenreCard from './CategoryCard/GenreCard';

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
    <div className='categories'>
      {genres.map((genre) => (
        <GenreCard
          key={genre.name}
          genre={genre.name}
          color={genre.color}
        />
      ))}
    </div>
  );
};

export default Categories;


