import React, { useState, useEffect } from 'react';

import Api from '../../Api/Api';

import CategoryList from '../CategoryList/CategoryList';

import './Ballot.scss';

const Ballot = () => {
  const [ballotData, setBallotData] = useState([]);

  useEffect(() => {
    Api.getBallotData().then(({ items }) => setBallotData(items));
  }, []);

  console.log(ballotData);

  return (
    <div className="ballot">
      <CategoryList categories={ballotData} />
    </div>
  );
};

export default Ballot;
