import React from 'react';
import { Topside } from './Topside';
import styled, { css } from 'styled-components';
import { useLayoutContext } from '../../commons/LayoutContext';

export function ContentArea(props: React.PropsWithChildren<unknown>) {
  const layoutData = useLayoutContext();

  return (
    <StyledMain data-testid="contentArea" sidebarState={layoutData!.sidebar}>
      <Topside />
      <StyledContent>{props.children}</StyledContent>
    </StyledMain>
  );
}

const StyledMain = styled.main<{ sidebarState: string }>`
  flex: 1;
  transition: all 0.5s ease-in-out;
  min-height: 100vh;
  overflow: hidden;

  ${({ sidebarState }) =>
    sidebarState === 'open'
      ? css`
          margin-left: 0;
        `
      : css`
          margin-left: -96px;

          @media screen and (max-width: 700px) {
            margin-left: -100vw;
          }
        `};
`;

const StyledContent = styled.section`
  background: #e5e5e5;
  padding: 1em 6em 3em 6em;
  min-height: 100%;
  position: relative;

  @media screen and (max-width: 1300px) {
    padding-right: 3em;
    padding-left: 3em;
  }

  @media screen and (max-width: 1100px) {
    padding-right: 2em;
    padding-left: 2em;
  }

  @media screen and (max-width: 800px) {
    padding: 1em 1em 2em 1em;
  }
`;
