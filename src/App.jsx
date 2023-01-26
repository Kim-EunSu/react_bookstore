import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
// import Header from "./components/Header";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/book" element={<BookList />}></Route>
          <Route path="book/:id" element={<BookDetails />} />

          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
