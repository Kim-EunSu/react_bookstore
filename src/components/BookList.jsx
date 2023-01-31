import { useMatch, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
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
  background: #efefef;
`;

const BookWrap = styled.div`
  padding: 1rem;
`;

const BookImage = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 0.5rem;
  object-fit: contain;
`;

const BookInfo = styled.div`
  text-align: center;
  p:first-child {
    line-height: 1.4;
    font-weight: 700;
    margin-bottom: 7px;
    font-size: 1.2rem;
  }
  p:last-child {
    opacity: 0.8;
    font-weight: 400;
  }
`;

function BookList({ book }) {
  console.log(book);

  const bookMatch = useMatch(`book`);
  console.log(bookMatch);

  const navigate = useNavigate();

  return (
    <>
      {bookMatch ? (
        <Wrapper>
          {book &&
            book.map((item) => {
              //image error 수정
              let thumbnail =
                item.volumeInfo.imageLinks === undefined
                  ? noImage
                  : `${item.volumeInfo.imageLinks.thumbnail}`;

              return (
                <>
                  <BookWrapper key={item.id}>
                    <BookWrap>
                      <Link to={`/book/${item.id}`} state={{ ...item }}>
                        <BookImage src={thumbnail} />
                        <BookInfo>
                          <p>{item.volumeInfo.title}</p>
                          <p>
                            {item.volumeInfo.authors
                              ? item.volumeInfo.authors
                              : "Anonymous"}
                          </p>
                        </BookInfo>
                      </Link>
                    </BookWrap>
                  </BookWrapper>
                </>
              );
            })}
        </Wrapper>
      ) : null}
    </>
  );
}

export default BookList;
