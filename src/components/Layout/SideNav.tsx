import React from 'react';
import styled, { css } from 'styled-components';
import { Menu, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiHome, FiUsers } from 'react-icons/fi';
import { RiArrowRightSLine } from 'react-icons/ri';

import { useLayoutContext } from '../../commons/LayoutContext';
import { ReactComponent as AppLogo } from '../../assets/images/logo.svg';
import { ReactComponent as UnknownIcon } from '../../assets/images/unknown.svg';
import { ReactComponent as UnknownIcon2 } from '../../assets/images/unknown2.svg';

export function SideNav() {
  const layoutData = useLayoutContext();

  const handleMobileNavigation = () => {
    const isMobile = layoutData?.mobile;

    if (isMobile) {
      layoutData?.closeSidebar();
    }
  };

  return (
    <StyledSideNav data-testid="sideNav" sidebarState={layoutData!.sidebar}>
      <section className="logo">
        <button className="close-sidebar" onClick={layoutData?.closeSidebar}>
          <MdClose />
        </button>
        <div className="logo-container">
          <AppLogo />
        </div>
      </section>
      <nav className="nav-menu">
        <Menu>
          <Menu.Item className="sidenav-item">
            <StyledNavLink
              onClick={handleMobileNavigation}
              activeClassName="active-nav"
              to="/overview"
            >
              <div className="link">
                <span>
                  <FiHome />
                </span>
              </div>
            </StyledNavLink>
          </Menu.Item>
          <Menu.Item className="sidenav-item">
            <StyledNavLink
              onClick={handleMobileNavigation}
              activeClassName="active-nav"
              to="/reports"
            >
              <div className="link">
                <span>
                  <UnknownIcon />
                </span>
              </div>
            </StyledNavLink>
          </Menu.Item>
          <Menu.Item className="sidenav-item">
            <StyledNavLink
              onClick={handleMobileNavigation}
              activeClassName="active-nav"
              to="/manage-users"
            >
              <div className="link">
                <span>
                  <FiUsers />
                </span>
              </div>
            </StyledNavLink>
          </Menu.Item>
          <Menu.Item className="sidenav-item">
            <StyledNavLink
              onClick={handleMobileNavigation}
              activeClassName="active-nav"
              to="/settings"
            >
              <div className="link">
                <span>
                  <UnknownIcon2 />
                </span>
              </div>
            </StyledNavLink>
          </Menu.Item>
        </Menu>
      </nav>
      <button className="logout">
        <RiArrowRightSLine />
      </button>
    </StyledSideNav>
  );
}

const StyledNavLink = styled(NavLink)`
  width: 100%;
  text-align: center;

  .link {
    display: flex;
    justify-content: center;
    font-size: 1.4rem;
    color: #fff;

    span:first-child {
      display: flex;
      align-items: center;
      svg {
        color: #fff;
      }
    }
  }
`;

const StyledSideNav = styled.aside<{ sidebarState: string }>`
  background: #052231;
  height: 100vh;
  flex: 0 0 96px;
  white-space: nowrap;
  transition: all 0.3s ease-out;
  z-index: 100000;
  overflow: auto;

  @media screen and (max-width: 700px) {
    flex: 0 0 100vw;
  }

  ${({ sidebarState }) =>
    sidebarState === 'open'
      ? css`
          position: sticky;
          top: 0;
          left: 0;
          transform: translateX(0px);
        `
      : css`
          transform: translateX(-100%);
        `};

  .logo {
    height: 5.2em;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e8e7ea4a;

    .close-sidebar {
      display: none;
      position: absolute;
      top: 2px;
      right: 3px;
      border: 0;
      height: 1.8em;
      width: 1.8em;
      background: inherit;
      border-radius: 50%;
      font-size: 2rem;
      color: #fff;

      @media screen and (max-width: 700px) {
        display: block;
      }
    }
  }
  .logo-container {
  }

  .ant-menu-root.ant-menu-vertical,
  .ant-menu-root.ant-menu-vertical-left,
  .ant-menu-root.ant-menu-vertical-right,
  .ant-menu-root.ant-menu-inline {
    background: #052231;
  }

  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border: none;
  }

  .sidenav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 0.7em 0em;
  }
  .sidenav-item > svg {
    font-size: 2rem;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: inherit;
  }

  .active-nav {
    background-color: #23b3e8;
    padding: 0.4em 0em;
    width: 1.8em;
    border-radius: 10px;
  }

  .nav-link {
    width: 100%;
    text-align: center;
  }

  .ant-menu-vertical .ant-menu-item:not(:last-child) {
    /* margin-bottom: 1em; */
  }

  .logout {
    position: relative;
    bottom: -36em;
    width: 60%;
    display: grid;
    place-items: center;
    background: #e8e7ea57;
    margin: auto;
    border-radius: 50%;
    border: none;
    height: 3em;
    width: 3em;

    svg {
      font-size: 2em;
      color: #23b3e8;
    }
  }
`;
