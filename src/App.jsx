import React, { useState, useReducer, useEffect } from 'react';
import Board from './Containers/Board';
import PoetryDisplay from './Containers/PoetryDisplay';

function App(){
    return (
      <div>
        <Board/>
        <PoetryDisplay/>
      </div>
    )
}

export default App;