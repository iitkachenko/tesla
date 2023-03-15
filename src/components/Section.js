import React from 'react';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";

function Section(
  {
    title,
    description = "Order Online for Touchless Delivery",
    backgroundImg,
    leftBtnText = "Custom order",
    rightBtnText = "Existing Inventory"
  }
) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade direction="up" triggerOnce fraction=".1">
        <ItemText>
          <h1>{ title }</h1>
          <p>{ description }</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade direction="up" triggerOnce>
          <ButtonGroup>
            <LeftButton>
              { leftBtnText }
            </LeftButton>
            { rightBtnText &&
              <RightButton>
                { rightBtnText }
              </RightButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow className="arrow-down" src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.section`
  height: 100vh;
  height: 100dvh;
  background: ${props => `url("/images/${props.bgImage}")`} center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:last-of-type .arrow-down {
    opacity: 0;
    visibility: hidden;
  }
`;

const ItemText = styled.div`
  padding-top: 15vh;
  padding-top: 15dvh;
  text-align: center;
`;

const Buttons = styled.div``

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: .85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  transition: background-color .2s ease-in;

  :hover {
    background: var(--hover-bg-color);
  }
`;

const RightButton = styled(LeftButton)`
  background: #fff;
  color: #000;
  opacity: .65;

  :hover {
    color: #fff;
  }
`;

const DownArrow = styled.img`
  margin-bottom: 5px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;