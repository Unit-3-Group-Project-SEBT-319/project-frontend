import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <Link to="/category/rock">Rock</Link>
      <Link to="/category/pop">Pop</Link>
      <Link to="/category/jazz">Jazz</Link>
      {/* More categories */}
    </div>
  );
};

export default Categories;
