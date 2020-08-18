import React from 'react';
import { Input, Tag } from 'antd';
import styled from 'styled-components';
import { FiSearch, FiShield } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

import { useLayoutContext } from '../../commons/LayoutContext';
import hamburger from '../../assets/images/hamburger.svg';
import user from '../../assets/images/user.svg';
import { ReactComponent as FCMB } from '../../assets/images/fcmb.svg';
import { ReactComponent as Bell } from '../../assets/images/bell.svg';
import { ReactComponent as Ribbon } from '../../assets/images/ribbon.svg';

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
        <div className="site-title">
          <FCMB />
          <span>FCMB: Mobile Banking</span>
          <span>...</span>
        </div>
        <div className="site-search">
          <form className="search-form">
            <button type="submit" className="search-btn">
              <FiSearch />
            </button>
            <Input placeholder="Search" style={{ width: 200 }} />
          </form>
        </div>
        <div className="notify">
          <Bell />
          <span className="notify-tag">
            <Tag icon={<FiShield />} color="#4DBD98">
              OWNER
            </Tag>
          </span>
          <Ribbon />
          <div className="user">
            <img src={user} alt="" />
          </div>
          <div className="profile">
            <div>
              <p style={{ marginBottom: '-4px' }}>Mark Dawn</p>
              <p className="email">Markdawn@natterbase</p>
            </div>
            <div>
              <IoIosArrowDown />
            </div>
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
    margin-right: 1em;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    background: none;
  }
  .hamburger-icon:focus {
    outline: none;
  }

  .site-title {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.5rem;

    svg {
      margin-right: 0.5em;
    }

    span:last-child {
      margin-left: 0.1em;
      font-size: 2rem;
      align-self: center;
      display: flex;
      letter-spacing: 1px;
    }
  }

  .site-search {
    border-left: 0.3px solid #2d2d2d42;
    margin-left: 4em;

    .search-form {
      display: flex;
      margin-left: 2em;

      .search-btn {
        display: grid;
        place-items: center;
        border: none;
        background: inherit;

        svg {
          font-size: 1.3rem;
        }
      }
    }

    .ant-input {
      border: 1px solid #d9d9d90d;
    }
  }

  .notify {
    display: flex;
    align-items: center;
    margin-left: auto;

    .notify-tag {
      margin-left: 2em;

      .ant-tag {
        display: flex;
        align-items: center;
        border-radius: 7px;
        padding: 0.1em 0.4em;

        svg {
          stroke-width: 3px;
        }

        span {
          margin-left: 1em;
          font-weight: 600;
        }
      }
    }

    .ribbon {
      margin: 0 2.2em 0 1.8em;
    }

    .profile {
      display: flex;
      align-items: center;
      margin-left: 1em;
      font-weight: 600;

      p {
        margin-bottom: 0;
      }

      .email {
        color: #23b3e8;
        font-size: 0.6rem;
      }
    }
  }
`;
