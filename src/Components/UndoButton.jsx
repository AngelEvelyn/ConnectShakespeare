import React from 'react';
import { MoveStoreContext } from '../Contexts/MoveStoreContext';

const UndoButton = () => {
    return ( 
        <MoveStoreContext.Consumer>
            {(context) => {
                const undoMove = context;
                return (
                    <button onClick={(event) => {
                        undoMove(event.target.id);
                        removePoem();
                    }}></button>
                )
            }}
        </MoveStoreContext.Consumer>
        
     );
}
 
export default UndoButton;