import React, { Component, createContext } from 'react';

const PoetryStoreContext = createContext();

class PoetryStoreContextProvider extends Component {
    state = {  
        poetryStore = [] //an array of objects?
    }
    undoPoem = () => {
        const newPoetryStore = this.state.poetryStore.slice().pop();
        this.setState({poetryStore: newPoetryStore});
    }
    getPoem = () => {
        //ajax call here? or is a reducer needed?
    }
    render() { 
        return ( 
            <PoetryStoreContext.Provider value={{...this.state, poetryStore: this.poetryStore}}>
                {this.props.children}
            </PoetryStoreContext.Provider>
         );
    }
}
 
export default PoetryStoreContextProvider;