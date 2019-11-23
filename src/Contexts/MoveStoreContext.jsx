import React, { createContext, Component } from 'react';

export const MoveStoreContext = createContext();

class MoveStoreContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moveStore: []
    }
    this.AddMove = this.AddMove.bind(this);
    this.UndoMove = this.UndoMove.bind(this);
  }
  AddMove(column) {
    const newMoveStore = moveStore.slice().push(column);
    this.setState({moveStore: newMoveStore});
  }
  UndoMove() {
    const newMoveStore = this.state.moveStore.slice().pop();
    this.setState({moveStore: newMoveStore});
  }
  render() { 
    return (  
      <MoveStoreContext.Provider value={{...this.state, AddMove: this.AddMove, UndoMove: this.UndoMove}}>
        {this.props.children}
      </MoveStoreContext.Provider>
    );
  }
}
 
export default MoveStoreContextProvider;
