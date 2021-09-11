import React from "react";
import styled from "styled-components";
import cover from "./img/Don-Den-01-cover.jpg";
import inv from "./img/Don-Den-02-inv.jpg";
import bg from "./img/bg.jpg";

const AppContainer = styled.div`
  background: url("${bg}");
  background-size: cover;
`;

const CentralizedLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const SecondContainer = styled.div`
  height: 100vh;
`;

const InvitationCover = styled.div`
  position: relative;
  z-index: 1;
  box-shadow: 0 5vw 10vw rgb(0 0 0 / 30%);
  line-height: 0;
  font-family: "Roboto", sans-serif;
  .text {
    position: absolute;
    width: 100%;
    bottom: 10%;
    line-height: 1;
    text-align: center;
    color: #e5e6e2;
    font-size: 1.5rem;
    bottom: 10%;
    height: 3em;
  }

  @media (orientation: portrait) {
    width: 90%;
    max-width: 650px;
    img {
      width: 100%;
      height: auto;
    }
    .text {
      font-size: min(1.5rem, 3vw);
    }
  }
  @media (orientation: landscape) {
    height: 90%;
    img {
      height: 100%;
      width: auto;
    }
  }
`;

const Invitation = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translateX(-50%) translateY(-50%);
  @media (orientation: portrait) {
    width: 85vw;
    max-width: 630px;
  }
  @media (orientation: landscape) {
    height: 88vh;
  }
`;

const HeartLoaderWrapper = styled.div`
  .lds-heart {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    transform: rotate(45deg);
    transform-origin: 40px 40px;
  }
  .lds-heart div {
    top: 32px;
    left: 32px;
    position: absolute;
    width: 32px;
    height: 32px;
    background: #fff;
    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .lds-heart div:after,
  .lds-heart div:before {
    content: " ";
    position: absolute;
    display: block;
    width: 32px;
    height: 32px;
    background: #fff;
  }
  .lds-heart div:before {
    left: -24px;
    border-radius: 50% 0 0 50%;
  }
  .lds-heart div:after {
    top: -24px;
    border-radius: 50% 50% 0 0;
  }
  @keyframes lds-heart {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;

const HeartLoader = () => {
  return (
    <HeartLoaderWrapper>
      <div className="lds-heart">
        <div></div>
      </div>
    </HeartLoaderWrapper>
  );
};

const getParameterByName = (name: string, url?: string) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

function App() {
  const [loaderActive, setLoaderActive] = React.useState<boolean>(true);
  const [imgLoadCount, setImgLoadCount] = React.useState<number>(0);
  const [invitee, setInvitee] = React.useState<string>();
  React.useEffect(() => {
    if (imgLoadCount === 3) {
      setLoaderActive(false);
    }
  }, [imgLoadCount]);
  React.useEffect(() => {
    let name = getParameterByName("n");
    if (name) {
      setInvitee(name);
    }
  }, []);
  return (
    <AppContainer>
      <img
        src={bg}
        style={{ display: "none" }}
        onLoad={() => setImgLoadCount(imgLoadCount + 1)}
      />
      <Invitation src={inv} onLoad={() => setImgLoadCount(imgLoadCount + 1)} />
      <CentralizedLayout>
        <InvitationCover>
          <img
            src={cover}
            alt="cover invitation"
            onLoad={() => setImgLoadCount(imgLoadCount + 1)}
          />
          <div className="text">
            {invitee?.split("!").map((s) => {
              return <div>{s === "@" ? "&" : s}</div>;
            })}
          </div>
        </InvitationCover>
      </CentralizedLayout>
      <SecondContainer />
      {loaderActive && (
        <CentralizedLayout
          style={{
            background: "#e74c3c",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10,
          }}
        >
          <HeartLoader />
        </CentralizedLayout>
      )}
    </AppContainer>
  );
}

export default App;
