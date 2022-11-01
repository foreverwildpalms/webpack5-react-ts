import React from 'react';
import styled from 'styled-components';

const StyledH = styled.h1`
  color: darkblue;
  font-size: 24px;
`;

const StyledDiv = styled.h1`
  background: darkred;
  width: 100px;
  height: 100px;
`;

const App = () => {
    const handleClick = function() : boolean {
        console.log('click');
        return true;
    }

    return (
        <div>
            <StyledH>Hello</StyledH>
            <StyledDiv/>
            <button onClick={handleClick}>Нажми</button>
        </div>
    )
};

export default App;