import React, { createContext, useState } from 'react';


export const BoardContext = createContext();

const BoardContextProvider = (props) => {

  const player1 = 'Cats';
  const player2 = 'Iguanas';

  const newBoard = () => {
    const row = [];
    const newBoard = [];
    for(let i = 0; i < 7; i++){
      row.push('empty');
    }
    for(let i = 0; i < 6; i++){
      newBoard.push([...row]);
      }
    return newBoard;
  }

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

  return ( 
  <BoardContext.Provider value={{addMove, undoMove, setMoveStore, player1, togglePlayer, currentPlayer, setCurrentPlayer, setBoard, board, newBoard}}>
    { props.children }
  </BoardContext.Provider> 
  );
};
 
export default BoardContextProvider;