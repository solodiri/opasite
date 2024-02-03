import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import lists from "./components/Data";
import Footer from "./pages/Footer";

import Details from "./pages/Details";
import About from "./pages/About";
import Services from "./pages/Services.js";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Conditions from "./pages/Conditions";
import Constitution from "./pages/Constitution";
import Constitution2 from "./pages/Constitution2";
import Blog from "./pages/Blog";
import News from "./pages/News";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";
// import Cards from "./components/Cards";
// import DataDisplay from "./components/DataDisplay";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route axact path="/" element={<Home />} />
          <Route axact path="/details" element={<Details />} />
          <Route axact path="/about" element={<About />} />
          <Route axact path="/services" element={<Services />} />
          <Route axact path="/projects" element={<Projects />} />
          <Route axact path="/events" element={<Events />} />
          <Route axact path="/contact" element={<Contact />} />
          <Route axact path="/conditions" element={<Conditions />} />
          <Route axact path="/constitution" element={<Constitution />} />
          <Route axact path="/constitution2" element={<Constitution2 />} />
          <Route axact path="/privacy" element={<Privacy />} />
          <Route axact path="/blog" element={<Blog />} />
          <Route axact path="/news" element={<News />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
