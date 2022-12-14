import ProgressBar from './components/ProgressBar';

const data = {
  items: [
    {name: 'Sold', color: '#BD1FBE', value: 677},
    {name: 'Got free', color: '#FC64FF', value: 5},
    {name: 'Burned', color: '#B2E342', value: 202},
    {name: 'Free float', color: '#848484', value: 323},
  ],
  barHeightInPx: 20,
  barWidthInPx: 900,
}

function App() {
  return (
    <ProgressBar data={data} />
  );
}

export default App;
