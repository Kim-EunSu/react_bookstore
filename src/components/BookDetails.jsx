import { useEffect, useState } from "react";
import styled from "styled-components";
import { useMatch, useParams } from "react-router-dom";

const DetailWrapper = styled.div`
  width: 100%;
  height: 50vh;
`;

function BookDetails() {
  const { id } = useParams();
  console.log(id);

  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        search +
        "&key=AIzaSyCM509Zx7dQE5Wlh-BnsLDauFCwKS51zp8" +
        "&maxResults=40"
    )
      .then((res) => res.json())
      .then((json) => setSearch(json.items));
  }, []);

  console.log(search);

  // const BookDetail = useMatch(`book/:${id}`);
  // console.log(BookDetail);

  return <>{search.volumeInfo.title}</>;
}

export default BookDetails;
