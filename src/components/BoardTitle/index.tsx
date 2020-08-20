import React from 'react';
import styled from 'styled-components';
import { FaEllipsisH } from 'react-icons/fa';

interface Props extends React.PropsWithChildren<unknown> {
  dots?: boolean;
}

export function BoardTitle(props: Props) {
  return (
    <StyledTitle>
      <h2 className="children">{props.children}</h2>
      {!props.dots && <FaEllipsisH className="ellipsis" />}
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .children {
    margin-bottom: 0;
    font-weight: 700;
    text-transform: capitalize;
  }

  .ellipsis {
    font-size: 0.7rem;
  }
`;
