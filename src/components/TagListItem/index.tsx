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
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor || '#fff'};
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em;
  text-transform: uppercase;
`;
