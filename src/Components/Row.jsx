import React, { Component } from 'react';
import Slot from './Slot.jsx';
import styled from 'styled-components';


const Row = (props) => {
    const slots = props.row.map((slot, j) => <Slot key={`slot${j}`} id={j} rowId={props.id} playSlot={props.playSlot} value={slot} /> );
    
    return (  
        <RowStyled>
            {slots}
        </RowStyled>
    );
}

const RowStyled = styled.tr`
  background-image: url(https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
`
 
export default Row;