import './App.css';
import  NumberProvider from './component/NumberContext'
import  NumberRandom  from './component/NumberRandom'

function App() {
  return (
    <div className="App">
      <NumberProvider>
        <NumberRandom />
    </NumberProvider>
    </div>
  );
}

export default App;
