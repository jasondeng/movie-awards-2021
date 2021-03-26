import React from 'react';

import NomineeList from '../NomineeList/NomineeList';

import './Category.scss';

const Category = ({ category, selectedNomimees, handleNomineeSelect }) => {
  const { title, items } = category;
  return (
    <section className="category">
      <h2>{title}</h2>
      <NomineeList
        nominees={items}
        category={category}
        selectedNomimees={selectedNomimees}
        handleNomineeSelect={handleNomineeSelect}
      />
    </section>
  );
};

export default Category;
