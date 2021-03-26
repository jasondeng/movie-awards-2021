import React from 'react';

import NomineeList from '../NomineeList/NomineeList';

import './Category.scss';

const Category = ({ category, handleNomineeSelect }) => {
  const { title, items } = category;
  return (
    <section className="category">
      <h2>{title}</h2>
      <NomineeList nominees={items} handleNomineeSelect={handleNomineeSelect} />
    </section>
  );
};

export default Category;
