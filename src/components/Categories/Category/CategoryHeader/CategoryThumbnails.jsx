import React from 'react';
import popImage from '/pictures/genres/popicon.jpg';
import jazzImage from '/public/pictures/genres/jazzicon.jpg';
import alternativeImage from '/public/pictures/genres/alternativeicon.jpg';
import metalImage from '/public/pictures/genres/metalicon.jpg';
import countryImage from '/public/pictures/genres/countryicon.jpg';
import rockImage from '/public/pictures/genres/rockicon.jpg';
import './categorythumbnails.css'

const genres = [
  { name: 'Pop', image: popImage },
  { name: 'Jazz', image: jazzImage },
  { name: 'Alternative', image: alternativeImage },
  { name: 'Metal', image: metalImage },
  { name: 'Country', image: countryImage },
  { name: 'Rock', image: rockImage },
];

const CategoryThumbnails = ({ genre }) => {
  const matchedGenre = genres.find(g => g.name.toLowerCase() === genre.toLowerCase());

  if (!matchedGenre) {
    return <div>Genre not found</div>;
  }

  return (
    <div className="genre-header">
      <div className="genre-image">
        <img src={matchedGenre.image} alt={matchedGenre.name} />
      </div>
      <div className="genre-name">
        <h1>{matchedGenre.name}</h1>
      </div>
    </div>
  );
};

export default CategoryThumbnails;
