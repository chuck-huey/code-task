import React from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '../../commons/LayoutContext';
import hamburger from '../../assets/images/hamburger.svg';

export function Topside() {
  const sidebar = useLayoutContext();

  return (
    <StyledTopside>
      <div className="topside-row">
        <button
          data-testid="hamburger"
          className="hamburger-icon"
          onClick={sidebar?.toggleSidebar}
        >
          <img src={hamburger} alt="" />
        </button>
        <div className="topside-avatar">
          <div className="initials"></div>
          <div className="profile">
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </StyledTopside>
  );
}

const StyledTopside = styled.section`
  background: #fbfbfb;
  height: 5.2em;
  box-shadow: 0px 15px 20px #0000000a;

  .topside-row {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 1em 3em 1em 3em;

    @media screen and (max-width: 1300px) {
      padding-right: 3em;
      padding-left: 3em;
    }

    @media screen and (max-width: 1100px) {
      padding-right: 2em;
      padding-left: 2em;
    }

    @media screen and (max-width: 800px) {
      padding-right: 1em;
      padding-left: 1em;
    }
  }
  .hamburger-icon {
    margin-right: auto;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    background: none;
  }
  .hamburger-icon:focus {
    outline: none;
  }

  .topside-item {
    text-align: center;
    width: 3em;
    margin-right: 1em;
  }
  .topside-item > svg {
    max-height: 100%;
    max-width: 100%;
    font-size: 1.7rem;
    fill: #292d2d;
    stroke: white;
    stroke-width: 17px;
  }
  .topside-avatar {
    display: flex;
    place-items: center;
    text-transform: capitalize;

    .initials {
      text-transform: uppercase;
      width: 2.7em;
      height: 2.8em;
      background: #fff4a3;
      color: #3e3c3c;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1.3rem;

      @media screen and (max-width: 500px) {
        width: 2.2em;
        height: 2.4em;
      }
    }

    .profile {
      margin-left: 0.5em;
      font-weight: 600;
      color: #00243f;

      p {
        margin-bottom: 0;

        &:last-child {
          font-size: 0.8rem;
          font-weight: 400;
        }
      }

      @media screen and (max-width: 500px) {
        display: none;
      }
    }
  }
  .topside-avatar > img {
    width: 100%;
    border-radius: 50%;
  }
`;
