import React from 'react';

import Nominee from './Nominee';

import './NomineeList.scss';

const NomineeList = ({
  nominees,
  category,
  handleNomineeSelect,
  selectedNomimees,
}) => {
  return (
    <main className="nominee-list">
      {nominees.map((nominee) => (
        <Nominee
          key={nominee.id}
          category={category}
          nominee={nominee}
          selectedNomimees={selectedNomimees}
          handleNomineeSelect={handleNomineeSelect}
        />
      ))}
    </main>
  );
};

export default NomineeList;
