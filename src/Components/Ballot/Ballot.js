import React, { useState, useEffect } from 'react';

import Api from '../../Api/Api';
import { getInitialNominees } from '../../Utils/helpers';

import CategoryList from '../CategoryList/CategoryList';

import './Ballot.scss';

const Ballot = () => {
  const [ballotData, setBallotData] = useState([]);
  const [selectedNomimees, setSelectedNominees] = useState(null);

  useEffect(() => {
    Api.getBallotData().then(({ items }) => {
      setBallotData(items);
      setSelectedNominees(getInitialNominees(items));
    });
  }, []);

  const handleNomineeSelect = (category, nominee) => {
    setSelectedNominees((prevSelectedNominees) => ({
      ...prevSelectedNominees,
      [category.id]: nominee.id,
    }));
  };

  return (
    <div className="ballot">
      <CategoryList
        categories={ballotData}
        handleNomineeSelect={handleNomineeSelect}
      />
    </div>
  );
};

export default Ballot;
