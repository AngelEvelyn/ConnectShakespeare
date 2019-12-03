import React, { useContext } from 'react';
import { PoetryContext } from '../Contexts/PoetryContext.jsx';
import PoetryBox from '../Components/PoetryBox.jsx';

const PoetryDisplay = () => {
const { poetryStore } = useContext(PoetryContext);
const poetryBoxes = poetryStore.map((poem, i) => <PoetryBox key={`poem${i}`} id={i} title={poem.title} line={poem.line} />);
    return ( 
        <div className='poetry-display'>
          {poetryBoxes}
        </div>
     );
}
 
export default PoetryDisplay;
