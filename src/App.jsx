import React from 'react';
import styled from 'styled-components';
import PoetryContextProvider from './Contexts/PoetryContext';
import BoardContextProvider from './Contexts/BoardContext';
import Board from './Containers/Board';
import PoetryDisplay from './Containers/PoetryDisplay';
import UndoButton from './Components/UndoButton';

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

  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Beautiful_green_hills.jpg/1280px-Beautiful_green_hills.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  font-family: fantasy;
  width: 100vw;
  height: 100vh;
  margin: 0px;
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