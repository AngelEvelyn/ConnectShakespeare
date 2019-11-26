import React from 'react';

const PoetryBox = (props) => {
    return (
    <p className='poem'>{props.title} \n {props.line}</p>
      );
}
 
export default PoetryBox;