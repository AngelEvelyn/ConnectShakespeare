import React, { useState, useReducer, useEffect, Component } from 'react';
import MovesStoreContext from '../Contexts/MoveStoreContext';

class Board extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      moveStore: []
    }
  }
  render(){
    return (  
      <MovesStoreContext.Consumer>
        {(context) => {
          const { moveStore } = context;
          const { addMove } = context;
          return (
            <div></div> //whatever JSX that needs the context
          )
        }}
      </MovesStoreContext.Consumer>
    );
  }

}


export default Board;