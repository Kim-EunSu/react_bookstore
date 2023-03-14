import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Routes/Home";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import About from "./Routes/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book" element={<BookList />}></Route>
        <Route path="book/:bookId" element={<BookDetail />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
