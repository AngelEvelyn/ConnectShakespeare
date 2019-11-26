import React, { createContext, useState } from 'react';

export const PoetryStoreContext = createContext();

PoetryStoreContextProvider = (props) => {
  const [poetryStore, setPoetryStore] = useState([]);

  const undoPoem = () => {
    const newPoetryStore = [...poetryStore].pop();
    setPoetryStore([...newPoetryStore]);
  }
  const getPoem = () => {
    fetch('', {
      method:'GET',
      headers: {'Content-Type': 'application/json'}
    })
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
    //grab random line in string with regex
    const newPoem = {title, line}; //object with title and line property
    setPoetryStore([...poetryStore, newPoem]);
    return;
    });
  }

    return ( 
      <PoetryStoreContext.Provider value={{poetryStore, getPoem, undoPoem}}>
        {props.children}
      </PoetryStoreContext.Provider>
    );
}
 
export default PoetryStoreContextProvider; 