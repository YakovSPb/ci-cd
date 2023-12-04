import './App.css';
import {useState} from "react";

function App() {
  const [state, setState] = useState(0)
  const increment = setState(prev=>prev+1)
  return (
    <div className="App">
        <h1>learn ci-cd</h1>
        <a
            className="App-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
      <h1>value = {state}</h1>
      <button onClick={increment}>
        increment
      </button>
    </div>
  );
}

export default App;
