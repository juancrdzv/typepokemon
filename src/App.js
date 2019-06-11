import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GameManager from './components/GameManagerComponent/GameManager';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GameManager />
      </Provider>
    </div>
  );
}

export default App;
