import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Hello from Yakov</h1>
      <button
          style={{background: 'black', color: 'white', padding: 15}}
          onClick={()=> alert('helloWord')}
      >
        increment
      </button>
    </div>
  );
}

export default App;
