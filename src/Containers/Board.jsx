import React, {useContext, useEffect, useState} from 'react';
import { PoetryContext } from '../Contexts/PoetryContext';
import { BoardContext } from '../Contexts/BoardContext';
import Row from '../Components/Row';
import styled from 'styled-components';


const Board = () => {

  const { board, setBoard, newBoard, togglePlayer, currentPlayer, player1, setCurrentPlayer, addMove, setMoveStore } = useContext(BoardContext);
  const { setPoetryStore, getPoem } = useContext(PoetryContext);


  const playPiece = (col) => {
    const boardClone = [];
    board.forEach((row) => boardClone.push([...row]));

    for (let r = 5; r >= 0; r--) {
      if (boardClone[r][col] === 'empty') {
        boardClone[r][col] = currentPlayer;
        return boardClone;
      }
    }
    return false;
  }

  const playSlot = (col) => {
    const played = playPiece(col);
    if (played){
      setBoard(played);
      addMove(col);
      getPoem();
      togglePlayer();
      return;
    }
    alert('Choose a different column');
    return;
  }

  const restartGame = () => {
    setBoard(newBoard());
    setMoveStore([]);
    setPoetryStore([]);
    setCurrentPlayer(player1);
    return;
  }
  
  const rows = board.map((row, i) => <Row key={`row${i}`} id={i} playSlot={playSlot} row={row}></Row>);

  return (
    <BoardStyled>
      <button className='reset-button' onClick={restartGame}><h3>Restart Game</h3></button>
      <h2>Current Player: {currentPlayer}</h2>
      <table className='inner-board'>
        <tbody>
          {rows}
        </tbody>
      </table>
    </BoardStyled>
  );

}

  // display: flex;
  // flex-direction: column;

const BoardStyled = styled.div`
  grid-area: main;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-content: spaced-evenly;
  align-items: center;
  .inner-board {
    width: auto;
    height: auto;
    border: 2px solid black;
  }
  .reset-button {
    background-color: violet;
    width: 250px;
    height: 50px;
  }
`


export default Board;