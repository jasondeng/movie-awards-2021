import React, { useState } from 'react';
import classNames from 'classnames';

import './Nominee.scss';

const Nominee = ({
  nominee,
  category,
  handleNomineeSelect,
  selectedNomimees,
}) => {
  const [isHovered, setHovered] = useState(false);

  const { title, photoUrL } = nominee;
  const isSelected = selectedNomimees[category.id] === nominee.id;

  const handleClick = () => {
    handleNomineeSelect(nominee);
  };

  const handleMouseOver = () => {
    setHovered((wasHovered) => !wasHovered);
  };

  return (
    <div
      className={classNames('nominee', {
        'nominee--selected': isSelected,
        'nominee--hovered': isHovered,
      })}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      <h3 className="nominee_title">{title}</h3>
      <img className="nominee_image" src={photoUrL} alt={title} />
      <button onClick={handleClick}>Select</button>
    </div>
  );
};

export default Nominee;
