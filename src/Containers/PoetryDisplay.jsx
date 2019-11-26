import React, { useContext } from 'react';
import PoetryStoreContext from '../Contexts/PoetryStoreContext';

const PoetryDisplay = () => {
const {poetryStore} = useContext(PoetryStoreContext);
const poetryBoxes = poetryStore.map((poem, i) => <PoetryBox key={`poem${i}`} id={i} title={poem.title} line={poem.line}></PoetryBox>);
    return ( 
        <div className='poetry-display'>
            {poetryBoxes}
        </div>
     );
}
 
export default PoetryDisplay;
