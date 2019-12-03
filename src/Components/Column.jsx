import React, { Component } from 'react';
import Slot from './Slot.jsx';


const Column = (props) => {
    const slots = props.column.map((slot, j) => <Slot key={`slot${j}`} id={j} colId={props.id} value={slot} /> );
    
    return (  
        <div className='column' onClick={(event) => console.log(event.target)}>
            {/* <p>
             {props.colId}
            </p> */}
            {slots}
        </div>
    );
}
 
export default Column;