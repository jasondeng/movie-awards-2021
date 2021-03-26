import React from 'react';

import Nominee from './Nominee';

const NomineeList = ({ nominees }) => {
  return (
    <main>
      {nominees.map((nominee) => (
        <Nominee key={nominee.id} nominee={nominee} />
      ))}
    </main>
  );
};

export default NomineeList;
