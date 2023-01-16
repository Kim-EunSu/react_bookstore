import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "./Banner";
import logoImg from "../images/logo.png";

const Nav = styled.div`
  width: 100%;
  display: flex;
  border: 5px solid red;
  padding: 1.5rem;
  justify-content: space-between;
  h1 {
    font-size: 3rem;
  }
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 70px;
  width: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${logoImg});
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
const Item = styled.div`
  margin-right: 1.5rem;
`;

function Header() {
  return (
    <>
      <Nav>
        <Logo>
          <LogoImg />
          <h1>BookHuB</h1>
        </Logo>

        <Items>
          <Item>
            <Link to="/Home">Home</Link>
          </Item>
          <Item>
            <Link to="/About">About</Link>
          </Item>
        </Items>
      </Nav>
      <Banner />
    </>
  );
}

export default Header;
