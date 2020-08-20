import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import { BoardTitle } from '../../components/BoardTitle';
import { ModuleCard } from '../../components/ModuleCard';
import { OverviewCard } from '../../components/OverviewCard';
import { TabBar } from '../../components/TabBar';
import { TestDropdown } from '../../components/TestDropdown';

export default function TestCases() {
  return (
    <section>
      <TabBar>
        <TestCaseContent>
          <div className="module-list">
            <BoardTitle>modules</BoardTitle>
            <ul className="card-list">
              {new Array(10).fill(0).map((_, index) => (
                <li key={index}>
                  <ModuleCard />
                </li>
              ))}
            </ul>
          </div>
          <div className="test-cases">
            <BoardTitle dots>added test cases</BoardTitle>
            <div className="grid">
              <ul className="test-list">
                {new Array(10).fill(0).map((_, index) => (
                  <li key={index}>
                    <div className="test-listitem">
                      <p>Make the background image blur</p>
                      <TestDropdown />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="button-row">
                <Button className="new-btn">New Test Case</Button>
                <Button className="test-btn">Test</Button>
              </div>
            </div>
          </div>
          <div className="overview">
            <BoardTitle dots>quick overview</BoardTitle>
            <div className="overview-grid">
              <OverviewCard background="#F15832" total={20} text="total modules" />
              <OverviewCard background="#03293dcc" total={20} text="improvement" />
              <OverviewCard background="#296799" total={14} text="total modules tested" />
              <OverviewCard background="#F8426E" total={20} text="total failed" />
              <OverviewCard background="#4DBD98" total={20} text="total passed" />
              <OverviewCard background="#3D43A2" total={20} text="total untested" />
            </div>
          </div>
        </TestCaseContent>
      </TabBar>
    </section>
  );
}

const TestCaseContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 2em;
  margin-top: 1.5em;

  .card-list {
    height: 52em;
    overflow-y: auto;
    margin-top: 1em;
  }

  .grid {
    background: #fff;
    height: 52em;
    margin-top: 1em;

    .test-list {
      overflow: auto;
      height: 42em;
      padding: 1.5em;

      .test-listitem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2em;

        p {
          margin-bottom: 0;
        }
      }

      .test-dropdown {
        background: #4dbd98;
        border-radius: 5px;
        color: #fff;
        border: 2px solid rgba(26, 12, 47, 0.1);
        font-weight: 600;
      }
    }

    .button-row {
      position: relative;
      bottom: -0.5em;
      padding: 2em;
      display: flex;
      justify-content: space-between;

      .new-btn {
        background: #23b3e8;
        border: 2px solid rgba(26, 12, 47, 0.1);
        border-radius: 5px;
        color: #fff;
        font-weight: 700;
        padding: 1.3em 1.6em;
        display: flex;
        align-items: center;
      }

      .test-btn {
        background: #ffffff;
        border: 2px solid #03293d;
        border-radius: 5px;
        font-weight: 700;
        padding: 1.3em 4em;
        display: flex;
        align-items: center;
      }
    }
  }

  .overview-grid {
    background: #fff;
    height: 52em;
    margin-top: 1em;
    padding: 3em 1.8em;

    display: grid;
    align-content: flex-start;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 2em;
  }
`;
