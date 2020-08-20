import React from 'react';
import styled from 'styled-components';

interface Props extends React.PropsWithChildren<unknown> {
  backgroundColor: string;
  textColor?: string;
}

export function TagListItem(props: Props) {
  return (
    <StyledSpan backgroundColor={props.backgroundColor}>{props.children}</StyledSpan>
  );
}

const StyledSpan = styled.span<Props>`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor || '#fff'};
  font-size: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;
