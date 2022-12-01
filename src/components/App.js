import { useParams } from 'react-router-dom';
import '../App.css';
import Clock from './Clock';
import Nav from './Nav';

function App() {

  const { date } = useParams();
  const { title } = useParams();

  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>{ title }</h1>
        <Nav />
      </div>
      <div className='time'>
        <Clock countdownDate={date} />
      </div>
    </div>
  );
}

export default App;
