import React from 'react';
import styled from 'styled-components';
import PoetryContextProvider from './Contexts/PoetryContext.jsx';
import Board from './Containers/Board.jsx';
import PoetryDisplay from './Containers/PoetryDisplay.jsx';

const App = () => {
  return (
      <AppStyled>
        <h1>Connect Shakespeare</h1>
        <PoetryContextProvider>
          <Board className='board-parent'/>
          <PoetryDisplay className='poetry-parent'/>
        </PoetryContextProvider>
      </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    ". header header ."
    "main main . sidebar";
  
  h1 {
    grid-area: header;
  }

  .board-parent {
    grid-area: main;
  }

  .poetry-parent {
    grid-area: sidebar;
  }
`


export default App;