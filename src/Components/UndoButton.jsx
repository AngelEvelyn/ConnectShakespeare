import React, { useContext } from 'react';
import { PoetryContext } from '../Contexts/PoetryContext';
import { BoardContext } from '../Contexts/BoardContext';
import styled from 'styled-components';

const UndoButton = () => {
  const { undoPoem } = useContext(PoetryContext);
  const { undoMove } = useContext(BoardContext);

  const undoAll = () => {
    undoMove();
    undoPoem();
  }
  return (
    <UndoButtonStyled onClick={undoAll}><h3>Undo Move</h3></UndoButtonStyled>
  );
}

// grid-area: button;
// justify-self: center;

const UndoButtonStyled = styled.button`
  width: 250px;
  height: 50px;
  margin-bottom: 50px;
  background-color: blue;
`
 
export default UndoButton;