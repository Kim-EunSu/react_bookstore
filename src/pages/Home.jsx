import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div``;
const Header = styled.div``;

function Home() {
  return (
    <Main>
      <Header />
      <Outlet />
    </Main>
  );
}

export default Home;
