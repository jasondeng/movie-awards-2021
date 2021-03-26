import React, { useState, useEffect } from 'react';

import Api from '../../Api/Api';
import {
  getInitialNominees,
  areAllNomineesSelected,
} from '../../Utils/helpers';

import CategoryList from '../CategoryList/CategoryList';

import './Ballot.scss';

const Ballot = ({ setShowModal }) => {
  const [ballotData, setBallotData] = useState([]);
  const [selectedNomimees, setSelectedNominees] = useState({});

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

  const handleSubmit = () => {
    setShowModal(selectedNomimees);
  };

  const isButtonEnabled = areAllNomineesSelected(selectedNomimees);

  return (
    <div className="ballot">
      <CategoryList
        categories={ballotData}
        selectedNomimees={selectedNomimees}
        handleNomineeSelect={handleNomineeSelect}
      />
      <button disabled={!isButtonEnabled} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Ballot;
