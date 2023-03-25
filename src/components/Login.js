import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { signInAPI } from "../actions";
import { Redirect } from "react-router";


const Login = (props) => {
  const Container = styled.div`
    padding: 0px;
  `;

  const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: no-wrap;

    & > a {
      width: 135px;
      height: 34px;
      @media (max-width: 768px) {
        padding: 0 5px;
      }
    }
  `;
  const Join = styled.a`
    font-size: 16px;
    padding: 10px 16px;
    text-decoration: none;
    border-radius: 5px;
    color: rgb(0, 0, 0, 0.6);
    margin-right: 8px;

    &:hover {
      color: rgba(0, 0, 0, 1);
      background-color: rgb(0, 0, 0, 0.08);
    }
  `;

  const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    font-size: 16px;
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 25px;
    color: #0a66c2;
    font-weight: 600;
    transition-duration: 167ms;
    line-height: 40px;
    text-align: center;
    background-color: transparent;
    &:hover {
      background-color: rgba(112, 181, 249, 0.15);
      box-shadow: inset 0 0 0 2px #0a66c2;
    }
  `;

  const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 138px;
    padding: 60px 0;
    position: relative;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
      min-height: 0;
    }
  `;

  const Hero = styled.div`
    width: 100%;
    h1 {
      padding-bottom: 0;
      width: 55%;
      font-size: 56px;
      color: #2977c9;
      font-weight: 200;
      line-height: 70px;
      @media (max-width: 768px) {
        font-size: 20px;
        text-align: center;
        width: 100%;
        line-height: 2;
      }
    }
    img {
      width: 700px;
      height: 670px;
      position: absolute;
      bottom: -2px;
      right: -150px;
      @media (max-width: 768px) {
        top: 230px;
        position: initial;
        width: initial;
        height: initial;
      }
    }
  `;

  const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width: 768px) {
      margin: 20px auto 0;
    }
  `;
  const Google = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 56px;
    width: 100%;
    border-radius: 30px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
      inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    border: none;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
      background-color: rgba(207, 207, 207, 0.25);
      color: rgba(0, 0, 0, 0.75);
      box-shadow: inset 0 0 0 2px rgb(0 0 0 / 60%),
        inset 0 0 0 3px rgb(0 0 0 / 0%), inset 0 0 0 2px rgb(0 0 0 / 0);
    }
    img {
      margin-right: 8px;
    }
  `;
  return (
    <Container>
      {props.user && <Redirect to="/feed" />}
      <Nav>
        <a href="/">
          <img src="/public/images/login-logo.svg" alt="logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/public/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.SignIn()}>
            <img src="/public/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
