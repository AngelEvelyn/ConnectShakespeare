import React, { Component, createContext } from 'react';

export const PoetryStoreContext = createContext();

class PoetryStoreContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poetryStore: []
    }
    this.GetPoem = this.GetPoem.bind(this);
    this.UndoPoem = this.UndoPoem.bind(this);
  }
  UndoPoem(){
    const newPoetryStore = this.state.poetryStore.slice().pop();
    this.setState({poetryStore: newPoetryStore});
  }
  GetPoem(){
    //ajax call here? or is a reducer needed?
  }
  render() { 
    return ( 
      <PoetryStoreContext.Provider value={{...this.state, UndoPoem: this.UndoPoem}}>
        {this.props.children}
      </PoetryStoreContext.Provider>
    );
  }
}
 
export default PoetryStoreContextProvider;