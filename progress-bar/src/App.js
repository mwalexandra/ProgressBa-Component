import './App.css';
import ProgressBar from './components/ProgressBar';

const data = {
  items: [
    {name: 'Sold', color: '#BD1FBE', value: 677},
    {name: 'Got free', color: '#FC64FF', value: 23},
    {name: 'Burned', color: '#B2E342', value: 202},
    {name: 'Free float', color: '#848484', value: 323},
  ],
  barHeightInPx: 30,
  barWidthInPer: 100,
}

function App() {
  return (
    <div className="App">
      <ProgressBar data={data}/>
    </div>
  );
}

export default App;
