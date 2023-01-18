import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 25px;
  display: grid;
  gap: 10px;
  box-sizing: border-box;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  font-family: "Poppins", sans-serif;
`;

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid red;
`;

const BookImage = styled.div`
  width: 100%;
  height: 200px;
  object-fit: cover;
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
            let thumbmnail =
              item.volumeInfo.imageLinks &&
              item.volumeInfo.imageLinks.smallThumbnail;
            return (
              <BookWrapper key={item.id}>
                <BookImage src={thumbmnail} />
                <BookInfo>
                  <p>{item.volumeInfo.title}</p>
                  <p>
                    {item.volumeInfo.authors
                      ? item.volumeInfo.authors
                      : "Anonymous"}
                  </p>
                </BookInfo>
              </BookWrapper>
            );
          })}
      </Wrapper>
    </>
  );
}

export default BookList;
