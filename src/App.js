import React from 'react';
import './App.css'; // CSS 파일을 불러옵니다
import Board from './components/Board';

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
      game-info
      </div>
    </div>
  );
}

export default App;
