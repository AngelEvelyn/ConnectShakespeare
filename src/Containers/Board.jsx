import React, {useContext, useEffect, useState} from 'react';
import PoetryStoreContext from '../Contexts/PoetryStoreContext';
import Column from '../Components/Column';
import UndoButton from '../Components/UndoButton';


const Board = () => {
  const {getPoem} = useContext(PoetryStoreContext);
  const [board, setBoard] = useState(Array.fill(Array.fill(null, 0, 6), 0, 7));
  const [moveStore, setMoveStore] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState('');

  const player1 = 'cats';
  const player2 = 'iguanas';

  const addMove = (column) => {
    setMoveStore([...moveStore.push(column)]);
  }

  const undoMove = () => {
    //recalculate board
    const lastPlayed = moveStore[moveStore.length - 1]
    setMoveStore([...moveStore.pop()]);
    const boardClone = [...board];
    const playedColumn = boardClone[lastPlayed];
    for (let i = 0; i < playedColumn.length; i++) {
      if (playedColumn[i] !== null) {
        playedColumn[i] = null;
        break;
      }
    }
    //set board
    setBoard([...boardClone]);
    let nextPlayer = currentPlayer === player1 ? player2 : player1;
    setCurrentPlayer(nextPlayer);
  }

  const playSlot = (slot) => {
    //calculate new board
    const boardClone = [...board];
    const playedColumn = boardClone[slot.colId]
    if (playedColumn.indexOf(null) !== -1){
      for (let i = playedColumn.length - 1; i >= 0; i--) {
        if (playedColumn[i] === null) {
          playedColumn[i] = currentPlayer;
          break;
        }
      }
      let nextPlayer = currentPlayer === player1 ? player2 : player1;
      setCurrentPlayer(nextPlayer);
      setBoard([...boardClone]);
      addMove(playedColumn);
    }
  }

  const winnerCheck = () => {

  }

  useEffect(() => {
    getPoem();
  }, [board])
  
  const columns = [];
  for (let i = 0; i < 8; i++){
    columns.push(<Column key={`col${i}`} id={`Col${i}`} playSlot={props.playSlot}></Column> );
  }

  return (
    <div className='board'>
      {columns}
      <UndoButton undoMove={props.undoMove}/>
    </div>
  );

}

export default Board;