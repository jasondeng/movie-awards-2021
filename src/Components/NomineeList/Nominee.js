import React from 'react';

const Nominee = ({ nominee }) => {
  const { title, photoUrL } = nominee;
  return (
    <div>
      <h3>{title}</h3>
      <img src={photoUrL} alt={title} />
      <button>Select</button>
    </div>
  );
};

export default Nominee;
