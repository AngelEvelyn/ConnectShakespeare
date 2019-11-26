import React from 'react';
import PoetryStoreContextProvider from './Contexts/PoetryStoreContext';
import Board from './Containers/Board';
import PoetryDisplay from './Containers/PoetryDisplay';

const App = () => {
  return (
    <PoetryStoreContextProvider>
      <div className='app'>
        <Board />
        <PoetryDisplay />
      </div>
    </PoetryStoreContextProvider>
  )
}

export default App;