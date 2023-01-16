import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import BookDetails from "./BookDetails";

const Header = styled.h3`
  padding: 1.5rem 1.5rem 1rem;
  font-weight: 600;
  font-size: 2.5rem;
  font-family: "Poppins", sans-serif;
`;

const BookWrapper = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  font-family: "Poppins", sans-serif;
`;

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  text-align: center;
  flex-direction: column;
  color: #222222;
  font-weight: 600;
  font-size: 1.7rem;
  background: #f4f4f4;
  p:last-child {
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

const Loader = styled.div``;

const BookImg = styled.img`
  width: 100%;
  height: 300px;
  background-size: cover;
`;

const BookInfo = styled.div``;

function BookList({ book }) {
  // const BookMatch = useMatch("/:bookId/bookdetail");
  // console.log(BookMatch);

  return (
    <>
      <Header> YOUR SEARCH RESULT</Header>
      <BookWrapper>
        {book.map((item) => {
          let thumbmnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;

          if (thumbmnail != undefined) {
            return (
              <>
                <Wrapper>
                  <BookImg src={thumbmnail} />
                  <BookInfo>
                    <Link to={`/book/${item.id}`}>
                      <p>{item.volumeInfo.title}</p>
                    </Link>

                    <p>
                      Author:{" "}
                      {item.volumeInfo.authors
                        ? item.volumeInfo.authors
                        : "Anonymous"}
                    </p>
                  </BookInfo>
                </Wrapper>
              </>
            );
          }
        })}
      </BookWrapper>
    </>
  );
}

export default BookList;
