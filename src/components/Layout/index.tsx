import React from 'react';
import styled from 'styled-components';

import { SideNav } from './SideNav';
import { ContentArea } from './ContentArea';
import { LayoutProvider } from '../../commons/LayoutContext';

export function Layout(props: React.PropsWithChildren<unknown>) {
  return (
    <LayoutProvider>
      <StyledLayout>
        <SideNav />
        <ContentArea>{props.children}</ContentArea>
      </StyledLayout>
    </LayoutProvider>
  );
}

const StyledLayout = styled.section`
  position: relative;
  display: flex;

  a {
    color: inherit;
  }
  a:hover {
    text-decoration: none;
    color: inherit;
  }
`;
