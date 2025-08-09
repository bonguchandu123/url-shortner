// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShortenPage from "./pages/ShortenPage";
import ListPage from "./pages/ListPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      {/* Navbar stays persistent on all pages */}
      <Navbar />  

      {/* Your pages will render here based on URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorten" element={<ShortenPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>

       <Footer/>
    </Router>
  );
}
