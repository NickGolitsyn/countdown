import './App.css';
import Clock from './components/Clock';
import Nav from './components/Nav';

function App({time}) {
  return (
    <div className="App">
      <div className='container'>
        <h1>No Nut November ends in</h1>
        <Nav />
      </div>
      <div className='time'>
        <Clock countdownDate={time} />
      </div>
    </div>
  );
}

export default App;
