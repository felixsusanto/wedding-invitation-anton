import React from "react";
import styled from "styled-components";
import cover from "./img/Don-Den-01-cover.jpg";
import inv from "./img/Don-Den-02-inv.jpg";
import bg from "./img/bg.jpg";

const AppContainer = styled.div`
  background: url("${bg}");
  background-size: cover;
`;

const FirstContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SecondContainer = styled.div`
  height: 100vh;
`;

const InvitationCover = styled.div`
  position: relative;
  z-index: 1;
  height: 90%;
  box-shadow: 0 5vw 10vw rgb(0 0 0 / 30%);
  img {
    height: 100%;
    width: auto;
  }
  &:before {
    /* @media (orientation: portrait) {
      content: "portrait";
    }
    @media (orientation: landscape) {
      content: "landscape";
    } */
  }
`;

const Invitation = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 88vh;
  transform: translateX(-50%) translateY(-50%);
`;

function App() {
  return (
    <AppContainer>
      <Invitation src={inv} />
      <FirstContainer>
        <InvitationCover>
          <img src={cover} alt="cover invitation" />
        </InvitationCover>
      </FirstContainer>
      <SecondContainer />
    </AppContainer>
  );
}

export default App;
