import React, { useContext } from 'react';
import { PoetryStoreContext } from '../Contexts/PoetryStoreContext';

const UndoButton = (props) => {
  const {undoPoem} = useContext(PoetryStoreContext);
  const undoMove = props.undoMove;

  const undoAll = () => {
    undoMove();
    undoPoem();
  }
  return (
    <button className='undo-button' onClick={undoAll} value='Undo Move'></button>
  );
}
 
export default UndoButton;