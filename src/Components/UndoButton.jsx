import React, { useContext } from 'react';
import { PoetryContext } from '../Contexts/PoetryContext.jsx';

const UndoButton = (props) => {
  const { undoPoem } = useContext(PoetryContext);
  const undoMove = props.undoMove;

  const undoAll = () => {
    undoMove();
    undoPoem();
  }
  return (
    <button className='button' onClick={undoAll}>Undo Move</button>
  );
}
 
export default UndoButton;