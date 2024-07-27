import React from 'react';

const genres = [
  { name: 'Pop', color: '#ff6666', image: 'https://i.cbc.ca/1.4678126.1527269930!/fileImage/httpImage/image.jpg_gen/derivatives/original_780/shawn-mendes.jpg' },
  { name: 'Jazz', color: '#ffcc66',  image: 'https://cdn.venngage.com/template/thumbnail/full/fb2a04b9-7536-432e-971b-2aed6aa6ec76.webp' },
  { name: 'Alternative', color: '#66ff66', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5acccc80032425.5cd5037ad1006.jpg' },
  { name: 'Metal', color: '#6666ff', image: 'https://www.muddycolors.com/wp-content/uploads/2019/11/Megadeath-1.jpg' },
  { name: 'Country', color: '#ff66cc', image: 'https://townsquare.media/site/204/files/2023/06/attachment-traveller.jpg?w=780&q=75' },
  { name: 'Rock', color: '#66ccff', image: 'https://www.billboard.com/wp-content/uploads/2022/03/35.-Metallica-%E2%80%98Master-of-Puppets-1986-album-art-billboard-1240.jpg?w=600' },
];

const CategoryThumbnails = ({ currentGenre }) => {
  const genre = genres.find(g => g.name.toLowerCase() === currentGenre.toLowerCase());

  if (!genre) {
    return <div>Genre not found</div>;
  }

  return (
    <div style={{ backgroundColor: genre.color, margin: '10px', padding: '10px', borderRadius: '5px' }}>
      <img src={genre.image} alt={genre.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }} />
      <h1>{genre.name}</h1>
    </div>
  );
};

export default CategoryThumbnails;

