import styled from "styled-components";
import BookDetails from "./BookDetails";
import { Link } from "react-router-dom";
import noImage from "../images/cover_not_found.jpg";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 25px;
  display: grid;
  gap: 10px;
  box-sizing: border-box;
  grid-template-columns: repeat(4, 1fr);
  font-family: "Poppins", sans-serif;
`;

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  background: #efefef;
`;

const BookImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const BookInfo = styled.div`
  text-align: center;
`;

function BookList({ book }) {
  console.log(book);

  return (
    <>
      <Wrapper>
        {book &&
          book.map((item) => {
            let thumbnail =
              item.volumeInfo.imageLinks === undefined
                ? noImage
                : `${item.volumeInfo.imageLinks.thumbnail}`;

            return (
              <>
                <BookWrapper key={item.id}>
                  <BookImage src={thumbnail} />
                  <BookInfo>
                    <p>{item.volumeInfo.title}</p>
                    <p>
                      {item.volumeInfo.authors
                        ? item.volumeInfo.authors
                        : "Anonymous"}
                    </p>
                  </BookInfo>
                </BookWrapper>
              </>
            );
          })}
      </Wrapper>
    </>
  );
}

export default BookList;
