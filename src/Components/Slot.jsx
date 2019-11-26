import React, { useState, useReducer, useEffect } from 'react';

const Slot = (props) => {
    return (  
    <button id={props.id} colId = {props.colId} onClick={(event) => props.playSlot(event.target)}></button>
    );
}
 
export default Slot;