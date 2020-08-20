import React from 'react';
import styled from 'styled-components';

import ellipse from '../../assets/images/ellipse.svg';
import ellipse2 from '../../assets/images/Ellipse.png';
import ellipse3 from '../../assets/images/Ellipse copy.png';

// This component displays the array of small images
export function FacePile() {
  return (
    <StyledFaceContainer>
      <span className="circle red">
        <img src={ellipse} alt="" />
      </span>
      <span className="circle blue">
        <img src={ellipse2} alt="" />
      </span>
      <span className="circle yellow">
        <img src={ellipse3} alt="" />
      </span>
    </StyledFaceContainer>
  );
}

const StyledFaceContainer = styled.div`
  width: 3em;
  position: relative;
  display: flex;
  align-items: center;

  .circle {
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    position: absolute;

    img {
      width: 100%;
      object-fit: center;
    }
  }

  .red {
    left: 0%;
  }

  .blue {
    left: 33%;
  }

  .yellow {
    left: 66%;
  }
`;
