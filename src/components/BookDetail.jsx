// import styled from "styled-components";
// import noImage from "../images/cover_not_found.jpg";
// import { useMatch, useParams, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// const BookImage = styled.img`
//   width: 100%;
//   height: 200px;
//   margin-bottom: 0.5rem;
//   object-fit: contain;
// `;

// const Wrapper = styled.div`
//   width: 100%;
//   height: 100vh;
// `;

// function BookDetails() {
//   const [book, setBook] = useState();
//   const { id } = useParams();
//   console.log({ id });

//   const bookMatch = useMatch(`/book/${id}`);
//   console.log(bookMatch);

//   const { state } = useLocation();
//   console.log(state);

//   useEffect(() => {
//     (async () => {
//       const bookData = await (
//         await fetch(`https://www.googleapis.com/books/v1/volumes?q=${id}`)
//       ).json();
//       setBook(bookData);
//     })();
//   }, [id]);

//   console.log(book);

//   return <></>;
//   //{book.item.volumeInfo.title}
// }

// export default BookDetails;
import React from "react";

function BookDetail() {
  return <div>수정중입니다.</div>;
}

export default BookDetail;
