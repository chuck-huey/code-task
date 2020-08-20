import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Bag } from '../../assets/images/bag.svg';

interface Props {
  background: string;
  total: number;
  text: string;
}

// Displays a card for the overview section
export function OverviewCard(props: Props) {
  return (
    <StyledRectangle background={props.background}>
      <div className="header">
        <div className="icon">
          <Bag />
        </div>
        <div className="total">{props.total}</div>
      </div>
      <p className="text">{props.text}</p>
    </StyledRectangle>
  );
}

const StyledRectangle = styled.div<{ background: string }>`
  width: 100%;
  background: ${(props) => props.background};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 1em;
  color: #fff;
  font-weight: 700;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3em;

    .icon {
      padding: 0.7em 0.8em;
      background: #fff3;
      border-radius: 5px;
      display: grid;
      place-items: center;
    }
    .total {
      font-size: 1.8rem;
    }
  }

  .text {
    margin-bottom: 0;
    text-transform: capitalize;
    font-size: 1rem;
  }
`;
