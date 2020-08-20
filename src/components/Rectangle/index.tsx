import React from 'react';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

export function Rectangle() {
  return (
    <StyledRectangle>
      <FiPlus />
    </StyledRectangle>
  );
}

const StyledRectangle = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  color: #23b3e8;
  border-radius: 5px;
  width: 100%;
  height: 2.6em;
  display: grid;
  place-items: center;
  cursor: pointer;
`;
