import { useState } from 'react';
import classNames from 'classnames';

import './App.scss';

import Ballot from './Components/Ballot/Ballot';
import ResultsModal from './Components/ResultsModal/ResultsModal';

function App() {
  const [showModal, setShowModal] = useState(null);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div
        className={classNames('App', { 'App--overlay': Boolean(showModal) })}
      >
        <header>
          <h1>Awards 2021</h1>
        </header>
        <Ballot setShowModal={setShowModal} />
      </div>
      {showModal && (
        <ResultsModal results={showModal} closeModal={closeModal} />
      )}
    </>
  );
}

export default App;
