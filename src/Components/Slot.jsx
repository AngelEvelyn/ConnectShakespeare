import React from 'react';
import styled from 'styled-components';


const Slot = (props) => {
    return ( 
      <SlotStyled>
          <div className='cell' onClick={() => props.playSlot(props.id)}>
            <div className={props.value} />
          </div>
      </SlotStyled>
    );
}


 
const SlotStyled = styled.td`

  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
  }

  .empty {
    border-radius: 100%;
    height: 75px;
    width: 75px;
    border: 1px solid black;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .Cats {
      border-radius: 100%;
      height: 75px;
      width: 75px;
      border: 1px solid black;
      background-image: url(https://pbs.twimg.com/profile_images/424484505915621376/EOwsjaMZ.png);
      background-color: red;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  .Iguanas {
    border-radius: 100%;
    height: 75px;
    width: 75px;
    border: 1px solid black;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/54/IGUANA_BIRU.jpg);
    background-color: yellow;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
`
export default Slot;