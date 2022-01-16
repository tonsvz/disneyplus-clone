import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/cowboy_front3.jpg" alt="" srcset="" />
      </Background>
      <ImageTitle>
        <img src="/images/disney-cb2.png" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>

      <Subtitle>1996 • 26m • Animation, Space, Teen, Japan</Subtitle>
      <Description>
        Set in 2071 and centered on the adventures of a gang of bounty hunters
        in space, the story delves into the unresolved issues of the
        protagonists' past, exploring concepts such as existentialism, boredom,
        loneliness, and the influence of the past.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vh;
  min-height: 175px;
  min-width: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 36px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 20px 24px;
  margin-right: 22px;
  letter-spacing: 1.7px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 1rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center !important;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  left: 20px;
  span {
    color: #ffffff;
    font-size: 25px;
    margin-bottom: 4px;
    margin-left: 0.5px;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  margin: 20px 0;
`;

const Description = styled.div`
  font-size: 20px;
  margin-top: 1rem;
`;
