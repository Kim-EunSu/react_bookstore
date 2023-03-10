import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BookList from "./BookList";
import BannerImage from "../images/library-img.jpg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(141, 39, 174, 0.3), rgba(141, 39, 174, 0.5)),
    url(${BannerImage}) center/cover no-repeat;
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
  font-weight: 700;
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
  border: transparent;
`;

function Banner() {
  const [Loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // api의 data를 먼저 가져오고 난 후
  const [bookData, setBookData] = useState([]);

  const navigate = useNavigate();

  //description이 있는 api주소(40개 나옴)
  // "https://www.googleapis.com/books/v1/volumes?q=" +
  // search +
  // "&orderBy=newest&maxResults=40&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";

  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&orderBy=newest&maxResults=40&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU"
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
      setSearch("");
      navigate("/book");
      setLoading(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Wrap>
          <Title>Find Your Book Of Choice.</Title>
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
            placeholder="Search the Book Name..."
          />
        </Wrap>
      </Wrapper>
      <BookList book={bookData} />
    </>
  );
}

export default Banner;
