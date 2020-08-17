import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import styled from 'styled-components';

// This component creates a loading screen
export function LoadingScreen() {
  return (
    <StyledLoader>
      <MoonLoader size={40} />
    </StyledLoader>
  );
}

const StyledLoader = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
