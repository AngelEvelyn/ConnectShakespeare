import React, { createContext, Component } from 'react';

export const MoveStoreContext = createContext();

class MoveStoreContextProvider extends Component {
    state = {  
        moveStore: [],
    }
    addMove = (column) => {
        const newMoveStore = moveStore.slice().push(column);
        this.setState({moveStore: newMoveStore});
    }
    undoMove = () => {
        const newMoveStore = this.state.moveStore.slice().pop();
        this.setState({moveStore: newMoveStore});
    }
    render() { 
        return (  
            <MoveStoreContext.Provider value={{...this.state, addMove: this.addMove, undoMove: this.undoMove}}>
                {this.props.children}
            </MoveStoreContext.Provider>
        );
    }
}
 
export default MoveStoreContextProvider;
