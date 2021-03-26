import React from 'react';

import Nominee from './Nominee';

import './NomineeList.scss';

const NomineeList = ({ nominees, handleNomineeSelect }) => {
  return (
    <main className="nominee-list">
      {nominees.map((nominee) => (
        <Nominee
          key={nominee.id}
          nominee={nominee}
          handleNomineeSelect={handleNomineeSelect}
        />
      ))}
    </main>
  );
};

export default NomineeList;
