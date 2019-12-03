import React from 'react';
import styled from 'styled-components';


const Slot = (props) => {
    return ( 
      <SlotStyled id={props.id} colId={props.colId} className={props.value} >{props.value}</SlotStyled>
    );
}
 
const SlotStyled = styled.div`
  width: 50px;
  height: 50px;
`
export default Slot;