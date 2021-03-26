import React from 'react';

import Category from './Category';

const CategoryList = ({ categories }) => {
  return (
    <main>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </main>
  );
};

export default CategoryList;
