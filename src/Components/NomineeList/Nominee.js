import React from 'react';

import './Nominee.scss';

const Nominee = ({ nominee }) => {
  const { title, photoUrL } = nominee;
  return (
    <div className="nominee">
      <h3 className="nominee_title">{title}</h3>
      <img className="nominee_image" src={photoUrL} alt={title} />
      <button>Select</button>
    </div>
  );
};

export default Nominee;
