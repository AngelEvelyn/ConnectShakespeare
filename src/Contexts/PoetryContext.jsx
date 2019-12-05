import React, { useState, createContext } from 'react';
import axios from 'axios';

export const PoetryContext = createContext();

const PoetryContextProvider = (props) => {
  const [poetryStore, setPoetryStore] = useState([]);

  const undoPoem = () => {
    const newPoetryStore = poetryStore.slice(0, poetryStore.length - 1);
    setPoetryStore(newPoetryStore);
  };

  const getPoem = () => {
    axios.get('http://poetrydb.org/author/Shakespeare')
    .then(data => {
      console.log(data);
      const poems = data.data;
      const poem = poems[Math.floor(Math.random() * poems.length)]
      const title = poem.title
      const textLines = poem.lines.filter((line) => line !== '');
      const line = textLines[Math.floor(Math.random() * textLines.length)];
      const newPoem = {title, line}; //object with title and line property
      console.log(newPoem);
      setPoetryStore([...poetryStore, newPoem]);
      return;
      });
  };

    return ( 
      <PoetryContext.Provider value={{poetryStore, setPoetryStore, getPoem, undoPoem}}>
        { props.children }
      </PoetryContext.Provider>
    );
}
 
export default PoetryContextProvider; 