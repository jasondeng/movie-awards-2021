import React from 'react';

import Category from './Category';

const CategoryList = ({ categories }) => {
  return (
    <main className="category-list">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </main>
  );
};

export default CategoryList;
