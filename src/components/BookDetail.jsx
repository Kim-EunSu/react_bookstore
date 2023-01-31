import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  /* position: absolute; */
  top: 50px;
  border: none;
  font-size: 30px;
  color: #717171;
  background: transparent;
  margin-bottom: 2.6rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const DetailContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Img = styled.img`
  padding: 1rem;
  max-width: 100%;
  max-height: 600px;
  width: 100%;
  margin-bottom: 0.5rem;
  object-fit: contain;
  background: #efefef;
`;

const Info = styled.div`
  margin-left: 3rem;
  font-weight: 700;
  p {
    font-weight: 400;
    margin: 1rem 0;
  }
`;

const Title = styled.h2``;
const Author = styled.p``;
const Desc = styled.p``;

function BookDetail() {
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  let thumbnail =
    state.volumeInfo.imageLinks === undefined
      ? "no"
      : `${state.volumeInfo.imageLinks.thumbnail}`;

  return (
    <>
      <Container>
        <Button onClick={handleClick}>&larr;</Button>
        <DetailContent>
          <Img src={thumbnail}></Img>
          <Info>
            <Title> {state.volumeInfo.title}</Title>
            <Author>Author: {state.author ? state.author : "Anonymous"}</Author>
            <Desc>
              Description:{" "}
              {state.volumeInfo.description
                ? state.volumeInfo.description
                : "No Description"}
            </Desc>
          </Info>
        </DetailContent>
      </Container>
    </>
  );
}

export default BookDetail;
