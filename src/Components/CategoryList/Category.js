import React from 'react';

import NomineeList from '../NomineeList/NomineeList';

const Category = ({ category }) => {
  const { title, items } = category;
  return (
    <section>
      <h2>{title}</h2>
      <NomineeList nominees={items} />
    </section>
  );
};

export default Category;
