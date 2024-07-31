import React from 'react';
import GenreCard from './CategoryCard/GenreCard';
import './categories.css';

import popImage from '../../../public/pictures/genres/popicon.jpg';
import jazzImage from '../../../public/pictures/genres/jazzicon.jpg';
import alternativeImage from '../../../public/pictures/genres/alternativeicon.jpg';
import metalImage from '../../../public/pictures/genres/metalicon.jpg';
import countryImage from '../../../public/pictures/genres/countryicon.jpg';
import rockImage from '../../../public/pictures/genres/rockicon.jpg';

const Categories = () => {
  const genres = [
    { name: 'Pop', image: popImage },
    { name: 'Jazz', image: jazzImage },
    { name: 'Alternative', image: alternativeImage },
    { name: 'Metal', image: metalImage },
    { name: 'Country', image: countryImage },
    { name: 'Rock', image: rockImage },
  ];

  return (
    <div className='container'>
      <div className='row'>
        {genres.map((genre) => (
          <div className='col-md-4 mb-4' key={genre.name}>
            <GenreCard genre={genre.name} image={genre.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
