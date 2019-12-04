import React from 'react';
import styled from 'styled-components';
import PoetryContextProvider from './Contexts/PoetryContext.jsx';
import BoardContextProvider from './Contexts/BoardContext.jsx';
import Board from './Containers/Board.jsx';
import PoetryDisplay from './Containers/PoetryDisplay.jsx';
import UndoButton from './Components/UndoButton.jsx';

const App = () => {
  return (
      <AppStyled>
        <h1>Connect Shakespeare</h1>
        <PoetryContextProvider>
          <BoardContextProvider>
            <Board />
            <div className='sidebar'>
              <UndoButton />
              <PoetryDisplay />
            </div>
          </BoardContextProvider>
        </PoetryContextProvider>
      </AppStyled>
  )
}


const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header"
    "main sidebar";

  h1 {
    grid-area: header;
    justify-self: center;
  }
  .sidebar {
    grid-area: sidebar;
    justify-self: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`


export default App;