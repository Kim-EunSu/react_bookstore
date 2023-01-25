import React from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  console.log(id);
  return <div>BookDetails</div>;
}

export default BookDetails;
