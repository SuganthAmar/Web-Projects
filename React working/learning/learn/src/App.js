import logo from './logo.svg';
import './App.css';
import React from 'react';


class Item extends React.Component {
  render() {
    return (
      <h1>Suganth World {this.props.name}</h1>

    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item name='Gully' />
        <Item name='Tharun' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
