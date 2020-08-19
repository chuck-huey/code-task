import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

import { Rectangle } from '../../components/Rectangle';
import { BoardTitle } from '../../components/BoardTitle';
import { ModuleCard } from '../../components/ModuleCard';
import { TabBar } from '../../components/TabBar';

export default function Home() {
  return (
    <section>
      <TabBar>
        <ModulesContent>
          <div className="column">
            <BoardTitle>backlog</BoardTitle>
            <div className="plus">
              <Rectangle />
            </div>
            <ul className="card-list">
              {new Array(10).fill(0).map((_, index) => (
                <li key={index}>
                  <ModuleCard />
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <BoardTitle>todo</BoardTitle>
            <div className="plus">
              <Rectangle />
            </div>
            <div className="deck"></div>
          </div>
          <div className="column">
            <BoardTitle>in progress</BoardTitle>
            <div className="plus">
              <Rectangle />
            </div>
            <div className="deck"></div>
          </div>
          <div className="column">
            <BoardTitle>in review</BoardTitle>
            <div className="plus">
              <Rectangle />
            </div>
            <div className="deck"></div>
          </div>
          <div className="column">
            <BoardTitle>done</BoardTitle>
            <div className="plus">
              <Rectangle />
            </div>
            <div className="deck">
              <div className="add-module">
                <AiOutlinePlus style={{ fontSize: '2rem' }} />
              </div>
            </div>
          </div>
        </ModulesContent>
      </TabBar>
    </section>
  );
}

const ModulesContent = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2em;

  .column {
    margin-top: 1.5em;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      margin-bottom: 0;
      font-weight: 700;
    }

    .ellipsis {
      font-size: 0.6rem;
    }
  }

  .plus {
    margin: 1em 0em;
  }

  .card-list {
    height: 52em;
    overflow-y: auto;
  }

  .deck {
    height: 52em;
    background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);

    .add-module {
      display: flex;
      align-items: center;
      color: #fff;
      justify-content: center;
      position: absolute;
      width: 81px;
      height: 81px;
      background: #23b3e8;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      right: -2.8em;
      bottom: 9em;
    }
  }
`;
