import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home />}>
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
        {/* <Route path="about" element={<About />} />
        <Route path="/" element={<Home />}>
          <Route path="/book/:id" element={<Home />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
