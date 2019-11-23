import React, { useState, useReducer, useEffect } from 'react';
import MoveStoreContextProvider from './Contexts/MoveStoreContext';
import PoetryStoreContextProvider from './Contexts/PoetryStoreContext';
import Board from './Containers/Board';
import PoetryDisplay from './Containers/PoetryDisplay';
import UndoButton from './Components/UndoButton';

const App = () => {
    return (
      <div className='app'>
        <MoveStoreContextProvider>
          <PoetryStoreContextProvider>
            <Board />
            <PoetryDisplay />
            <UndoButton />
          </PoetryStoreContextProvider>
        </MoveStoreContextProvider>

      </div>
    )
}

export default App;