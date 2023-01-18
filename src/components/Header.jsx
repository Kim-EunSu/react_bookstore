import React from "react";
import { useMatch } from "react-router-dom";
import styled from "styled-components";
import Banner from "./Banner";
import NavBar from "./NavBar";

function Header() {
  const homeMatch = useMatch("/");

  console.log(homeMatch);

  return (
    <>
      <NavBar />
      <Banner />
    </>
  );
}

export default Header;
