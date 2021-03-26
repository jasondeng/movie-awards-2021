import React from 'react';

import Category from './Category';

const CategoryList = ({
  categories,
  selectedNomimees,
  handleNomineeSelect,
}) => {
  return (
    <main className="category-list">
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          selectedNomimees={selectedNomimees}
          handleNomineeSelect={(nominee) => {
            handleNomineeSelect(category, nominee);
          }}
        />
      ))}
    </main>
  );
};

export default CategoryList;
