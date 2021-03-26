import React from 'react';

import './Nominee.scss';

const Nominee = ({ nominee, handleNomineeSelect }) => {
  const { title, photoUrL } = nominee;

  const handleClick = () => {
    handleNomineeSelect(nominee);
  };

  return (
    <div className="nominee">
      <h3 className="nominee_title">{title}</h3>
      <img className="nominee_image" src={photoUrL} alt={title} />
      <button onClick={handleClick}>Select</button>
    </div>
  );
};

export default Nominee;
