import React from "react";
import styled from "styled-components";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";

const Container = styled.div`
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin: auto;
`;

const Section = styled.div`
  min-height: 50px;
  margin: 16px 0 --30px;
  margin-top: 70px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    margin-block-start: 0;
    margin-block-end: 0;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    margin-block-start: 0;
    margin-block-end: 0;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    margin: 16px 0;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "left main right";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Home = (props) => {
  return (
    <Container>
      <Content>
        <Section>
          <h5>
            <a>Hiring in a hurry?- </a>
          </h5>
          <p>
            Find Talented pros in record time with upwork and keep business
            moving
          </p>
        </Section>
        <Layout>
          <Left />
          <Main />
          <Right />
        </Layout>
      </Content>
    </Container>
  );
};

export default Home;
