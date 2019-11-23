import React from 'react';
import { PoetryStoreContext } from '../Contexts/PoetryStoreContext';
import { MoveStoreContext } from '../Contexts/MoveStoreContext';

const UndoButton = () => {
  return (
    <PoetryStoreContext.Consumer>{(poetryStoreContext) => {
      return (
        <MoveStoreContext.Consumer>
          {(moveStoreContext) => {
              const undoMove = moveStoreContext;
              return (
                <button onClick={(event) => {
                  undoMove(event.target.id);
                  removePoem();
                }}></button>
              )
          }}
        </MoveStoreContext.Consumer>
      )
    }}</PoetryStoreContext.Consumer>
      
  );
}
 
export default UndoButton;