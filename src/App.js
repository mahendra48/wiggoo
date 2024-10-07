import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/style/mainStyle.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Home Coomponents/Header/Header";
import Menu from "./Components/Home Coomponents/Menu/Menu";
import About from "./Pages/About";
import Product from "./Pages/Product";
import ScrollToTop from "./Components/Scroll To Top/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/polishing-machine" element={<Product />} />
        <Route path="/category/scrubber" element={<Product />} />
        <Route path="/category/sweeper" element={<Product />} />
        <Route path="/category/carpet-cleaners" element={<Product />} />
        <Route path="/category/vacuum" element={<Product />} />
        <Route
          path="/category/:categoryName/:productId"
          element={<Product />}
        />
      </Routes>
    </Router>
  );
}

export default App;
