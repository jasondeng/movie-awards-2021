import './App.scss';
import Ballot from './Components/Ballot/Ballot';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Awards 2021</h1>
      </header>
      <Ballot />
      <button>Submit</button>
    </div>
  );
}

export default App;
