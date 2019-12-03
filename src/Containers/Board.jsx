import React, {useContext, useEffect, useState} from 'react';
import { PoetryContext } from '../Contexts/PoetryContext.jsx';
import Row from '../Components/Row.jsx';
import UndoButton from '../Components/UndoButton.jsx';
import styled from 'styled-components';


const Board = () => {

  const player1 = 'cats';
  const player2 = 'iguanas';

  const newBoard = () => {
    const newBoard = [];
    for(let i = 0; i < 6; i++){
      newBoard[i] = [];
      for (let j = 0; j < 7; j++){
        newBoard[i].push('empty');
      }
    }
    return newBoard;
  }

  const { setPoetryStore, getPoem } = useContext(PoetryContext);
  const [board, setBoard] = useState(newBoard());
  const [moveStore, setMoveStore] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(player1);


  const addMove = (column) => {
    setMoveStore([...moveStore, column]);
  }

  const togglePlayer = () => {
    let nextPlayer = currentPlayer === player1 ? player2 : player1;
    setCurrentPlayer(nextPlayer);
    return;
  }

  const undoMove = () => {
    // grab last played move from store
    if (moveStore.length === 0) {
      alert('Make a move first');
      return;
    }
    let col = [...moveStore].pop();
    const newMoveStore = moveStore.slice(0, moveStore.length - 1)
    //reset move store 
    setMoveStore(newMoveStore);

    // clone board
    const boardClone = [];
    board.forEach((row) => boardClone.push([...row]));

    // reset last played slot to empty
    for (let r = 0; r < 6; r++) {
      if (boardClone[r][col] !== 'empty') {
        boardClone[r][col] = 'empty';
        break;
      }
    }
    //set board
    setBoard(boardClone);
    togglePlayer();
    return;
  }

  const playSlot = (col) => {
    const boardClone = [];
    board.forEach((row) => boardClone.push([...row]));

    for (let r = 5; r >= 0; r--) {
      if (boardClone[r][col] === 'empty') {
        boardClone[r][col] = currentPlayer;
        setBoard(boardClone);
        addMove(col);
        getPoem(); //maybe async await needed here
        togglePlayer();
        return;
      }
    }
    alert('Choose a different column');
    return;
  }

  const rows = board.map((row, i) => <Row key={`row${i}`} id={i} playSlot={playSlot} row={row}></Row>);

  return (
    <BoardStyled>
      <button onClick={() => {
        setBoard(newBoard());
        setMoveStore([]);
        setPoetryStore([]);
        setCurrentPlayer(player1);
      }} className='button'><h4>Restart Game</h4></button>
      <p>{currentPlayer}</p>
      <table className='inner-board'>
        <tbody>
          {rows}
        </tbody>
      </table>
      <UndoButton undoMove={undoMove}/>
    </BoardStyled>
  );

}

  // display: flex;
  // flex-direction: column;

const BoardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  .inner-board {
    border: 1px solid blue
  }
`


export default Board;