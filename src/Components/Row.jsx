import React, { Component } from 'react';
import Slot from './Slot.jsx';


const Row = (props) => {
    const slots = props.row.map((slot, j) => <Slot key={`slot${j}`} id={j} rowId={props.id} playSlot={props.playSlot} value={slot} /> );
    
    return (  
        <tr className='row'>
            {slots}
        </tr>
    );
}
 
export default Row;