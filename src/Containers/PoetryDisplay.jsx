import React, { useContext } from 'react';
import { PoetryContext } from '../Contexts/PoetryContext';
import PoetryBox from '../Components/PoetryBox';
import styled from 'styled-components';

const PoetryDisplay = () => {
const { poetryStore } = useContext(PoetryContext);
const poetryBoxes = poetryStore.map((poem, i) => <PoetryBox key={`poem${i}`} id={i} title={poem.title} line={poem.line} />);
    return ( 
        <PoetryDisplayStyled>
          {poetryBoxes}
        </PoetryDisplayStyled>
     );
}

// grid-area: sidebar;
// justify-self: center;

const PoetryDisplayStyled = styled.div`

  border: 2px solid black;
  height: 500px;
  width: 300px;
  overflow: scroll;
  background-color: #74b3ed;
`
 
export default PoetryDisplay;
