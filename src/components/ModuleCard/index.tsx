import React from 'react';
import { BsClock } from 'react-icons/bs';
import { FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FacePile } from '../FacePile';

import { TagListItem } from '../TagListItem';

export function ModuleCard() {
  return (
    <Link to="/cases">
      <StyledCard>
        <div className="card-header">
          <h4>Apply gradient colours on the dashboard sidenav</h4>
          <span>
            <FaEllipsisH />
          </span>
        </div>
        <div className="card-footer">
          <div className="due-date">
            <BsClock />
            <span style={{ marginLeft: '0.4em' }}>due aug 8</span>
          </div>
          <div className="footer-right">
            <FacePile />
            <TagListItem backgroundColor="#E8E7EA" textColor="#A5A4A4">
              +4
            </TagListItem>
          </div>
        </div>
      </StyledCard>
    </Link>
  );
}

const StyledCard = styled.div`
  background: #fff;
  padding: 1em;
  border-radius: 7px;
  margin-bottom: 0.7em;

  .card-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2em;

    h4 {
      font-size: 0.7rem;
      flex: 1 1 70%;
      max-width: 16em;
      margin-bottom: 0;
    }

    span {
      font-size: 0.8rem;
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;

    .due-date {
      display: flex;
      align-items: center;
      font-size: 0.7rem;
      text-transform: capitalize;
    }

    .footer-right {
      display: flex;
      align-items: center;
    }
  }
`;
