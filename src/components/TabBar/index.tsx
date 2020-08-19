import React from 'react';
import { Tabs, Switch } from 'antd';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface Props extends React.PropsWithChildren<unknown> {}

export function TabBar(props: Props) {
  const path = useLocation().pathname;

  function callback(key: any) {
    console.log(key);
  }

  return (
    <StyledBar>
      <StyledTabs defaultActiveKey="1" onChange={callback}>
        <StyledTabs.TabPane tab="Overview" key="1">
          Content of Tab Pane 1
        </StyledTabs.TabPane>
        <StyledTabs.TabPane tab="Teams" key="2">
          Content of Tab Pane 2
        </StyledTabs.TabPane>
        <StyledTabs.TabPane tab={path === '/cases' ? 'Test' : 'Modules'} key="3">
          {props.children}
        </StyledTabs.TabPane>
        <StyledTabs.TabPane tab="Files" key="4">
          Content of Tab Pane 4
        </StyledTabs.TabPane>
        <StyledTabs.TabPane tab="Progress" key="5">
          Content of Tab Pane 5
        </StyledTabs.TabPane>
      </StyledTabs>
      <section className="right-section">
        <span className="item">All Task</span>
        <span className="item">
          <Switch defaultChecked onChange={() => {}} />
        </span>
        <span className="item">All Modules</span>
        <span className="item">Project Deadline: 6 weeks</span>
      </section>
    </StyledBar>
  );
}

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    width: 100%;
  }
  .ant-tabs-nav:before {
    border-bottom: 1px solid #a5a4a440;
  }
`;

const StyledBar = styled.section`
  position: relative;

  .right-section {
    position: absolute;
    right: 0;
    top: 15px;

    .item {
      margin-right: 3em;
    }
    .item:last-child {
      margin-right: 0;
    }
  }
`;
