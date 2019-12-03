import React, {useContext, useEffect, useState} from 'react';
import { PoetryContext } from '../Contexts/PoetryContext.jsx';
import Column from '../Components/Column.jsx';
import UndoButton from '../Components/UndoButton.jsx';
import styled from 'styled-components';


const Board = () => {

  const player1 = 'cats';
  const player2 = 'iguanas';

  const { setPoetryStore, getPoem } = useContext(PoetryContext);
  const [board, setBoard] = useState(new Array(7).fill(new Array(6).fill('empty')));
  const [moveStore, setMoveStore] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(player1);

  const setNewBoard = () => {
    setBoard(new Array(7).fill(new Array(6).fill('empty')));
    setMoveStore([]);
    setPoetryStore([]);

    return;
  }

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
    let col = moveStore[moveStore.length - 1];
    const newMoveStore = moveStore.slice(0, moveStore.length - 2)
    //reset move store 
    setMoveStore(newMoveStore);

    // clone board & reset last played slot to empty
    const boardClone = [...board];
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
    // clone board & set played slot to current player
    const boardClone = [...board];
    console.log(col);

    for (let r = 5; r >= 0; r--) {
      if (boardClone[r][col] === 'empty') {
        boardClone[r][col] = currentPlayer;
        setBoard(boardClone);
        addMove(col);
        togglePlayer();
        break;
      }
    }
      return;
  }

  useEffect(() => {
    getPoem();
  }, [board])
  
  const columns = board.map((col, i) => <Column key={`col${i}`} id={i} playSlot={playSlot} column={col}></Column>);

  return (
    <BoardStyled>
      <button onClick={setNewBoard} className='button'><h4>Restart Game</h4></button>
      <p>{currentPlayer}</p>
      <div className='inner-board'>
        {columns}
      </div>
        
      <UndoButton undoMove={undoMove}/>
    </BoardStyled>

  );

}

const BoardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  .inner-board {
    display: flex;
    flex-direction: row;
    border: 1px solid blue
  }
`


export default Board;