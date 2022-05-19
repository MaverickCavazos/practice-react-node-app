import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = React.useState([]);

  const getData = async () => {
    const response = await fetch("/api");
    const data = await response.json();

    setState(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {state.map((item, index) => {
          const { name, age } = item;
          return (
            <div key={index}>
              <h1 style={{color: "green"}}>Name</h1>
              <h2>{name}</h2>
              <p>Age: {age}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
