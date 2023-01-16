import React from "react";
import styled from "styled-components";

const BookWrapper = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
`;
const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  font-size: 30px;
  color: red;
  p:last-child {
    color: blue;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  background-size: cover;
`;

function BookList({ book }) {
  console.log(book);
  return (
    <>
      <BookWrapper>
        {book.map((item) => {
          let thumbmnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          if (thumbmnail != undefined) {
            return (
              <Wrapper>
                <Img src={thumbmnail}></Img>
                <p>{item.volumeInfo.title}</p>
                <p>
                  {item.volumeInfo.authors
                    ? item.volumeInfo.authors
                    : "Anonymous"}
                </p>
              </Wrapper>
            );
          }
        })}
      </BookWrapper>
    </>
  );
}

export default BookList;
