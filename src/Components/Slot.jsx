import React from 'react';
import styled from 'styled-components';


const Slot = (props) => {
    return ( 
      <SlotStyled onClick={() => props.playSlot(props.id)}>
          <div className={props.value}>
          {props.value}
          </div>
      </SlotStyled>
    );
}

// 
 
const SlotStyled = styled.td`
  width: 100px;
  height: 100px;
  border: 1px solid blue;
`
export default Slot;