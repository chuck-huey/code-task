import React from 'react';
import styled from 'styled-components';

import ellipse from '../../assets/images/ellipse.svg';
import ellipse2 from '../../assets/images/Ellipse copy.svg';

export function FacePile() {
  return (
    <StyledFaceContainer className="container-circle-3">
      <span className="circle red">
        <img src={ellipse} alt="" />
      </span>
      <span className="circle blue">
        <img src={ellipse2} alt="" />
      </span>
      <span className="circle yellow"></span>
    </StyledFaceContainer>
  );
}

const StyledFaceContainer = styled.div`
  width: 2.5em;
  height: 1.2em;
  position: relative;

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
    background: yellow;
    left: 66%;
  }
`;
