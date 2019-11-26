import React, { Component } from 'react';
import Slot from './Slot';


const Column = (props) => {
    const slots = [];
    for (let i = 0; i < 7; i++){
        slots.push(<Slot key={`slot${i}`} id={i} colId={props} playSlot={props.playSlot}></Slot> );
    }
    return (  
        <div className={col`${colNum}`}>
            {slots}
        </div>
    );
}
 
export default Column;