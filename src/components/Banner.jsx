import { eventNames } from "process";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BookList from "./BookList";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid blue;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
`;

const Title = styled.h3`
  font-size: 4rem;
`;
const Desc = styled.p`
  max-width: 680px;
  font-size: 1.2rem;
  text-align: center;
`;
const Input = styled.input`
  width: 100%;
  max-width: 55%;
  padding: 1.2rem 2.8rem;
  border-radius: 3.8rem;
`;

const Loader = styled.p`
  color: red;
`;

function Banner() {
  // const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // api의 data를 먼저 가져오고 난 후
  const [bookData, setBookData] = useState([]);

  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCM509Zx7dQE5Wlh-BnsLDauFCwKS51zp8" +
            "&maxResults=40"
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
      setSearch("");
    }
  };

  return (
    <>
      <Wrapper>
        <Wrap>
          <Title>Find Your Book</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
            sapiente quibusdam consequatur perspiciatis facere laboriosam non
            nesciunt at id repudiandae, modi iste? Eligendi, rerum!
          </Desc>
          <Input
            onKeyPress={searchBook}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="책 이름을 검색하세요."
          />
        </Wrap>
      </Wrapper>
      <BookList book={bookData}></BookList>
    </>
  );
}

export default Banner;
