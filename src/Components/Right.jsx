import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: right;
  @media (max-width: 768px) {
    margin-bottom: 35px;
  }
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      border: none;
    }
  }
`;

const Avatar = styled.div`
  background: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #0a66c2;
  img {
    margin-left: 5px;
  }
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

const BannerCreate = styled(BannerCard)`
 a{
  color : blue;
 }
 a:hover {
  color : #564572;
 }
`;

const Right = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your Feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Website</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all Recommendation
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://media.licdn.com/dms/image/C4E22AQE8Lt4Tlc5RwQ/feedshare-shrink_2048_1536/0/1611035395394?e=2147483647&v=beta&t=QsXkVBtYqg6GsJpWVrRFdtsH_8Hea8gMazbNdh1GruE"
          alt=""
        />
      </BannerCard>
      <BannerCreate>
        <h2>Design and Developed by </h2> 
        <h1>Subrata Roy</h1>
        <a href="https://github.com/Subrata41" target="_blank">
          Github Profile Link
        </a>
      </BannerCreate>
    </Container>
  );
};

export default Right;