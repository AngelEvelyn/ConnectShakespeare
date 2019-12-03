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
          <Board />
          <PoetryDisplay />
        </PoetryContextProvider>
      </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    ". header header ."
    "main main . sidebar";
  
  h1 {
    grid-area: header;
  }

  Board {
    grid-area: main;
  }

  PoetryDisplay {
    grid-area: sidebar;
  }
`


export default App;