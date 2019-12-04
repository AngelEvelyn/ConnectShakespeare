import React from 'react';
import styled from 'styled-components';

const PoetryBox = (props) => {
    return (
    <PoetryBoxStyled>
      <p>{props.title}</p> 
      <p>{props.line}</p>
    </PoetryBoxStyled>
      );
}

const PoetryBoxStyled = styled.div`

  margin: 10px;

`
 
export default PoetryBox;