import React, { useState, createContext } from 'react';
import axios from 'axios';

export const PoetryContext = createContext();

const PoetryContextProvider = (props) => {
  const [poetryStore, setPoetryStore] = useState([
    {title: 'Roses are Red', line: 'Violets are blue'}
  ]);

  const undoPoem = () => {
    const newPoetryStore = poetryStore.slice(0, poetryStore.length - 2);
    setPoetryStore(newPoetryStore);
  };

  const getPoem = () => {
    axios.get('http://poetrydb.org/author/Shakespeare')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      //grab random line in string with regex
      // make this into a helper function
      // const poems = Object.entries(data);
      // const title = poems[Math.random()]
      // const line = (data) => {
      //   data.lines
      // }
      // const newPoem = {title, line}; //object with title and line property
      // setPoetryStore([...poetryStore, newPoem]);
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