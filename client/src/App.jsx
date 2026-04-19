import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OurSolutionsPage from "./pages/OurSolutionsPage";
import CommunitiesPage from "./pages/CommunitiesPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/our-solutions" element={<OurSolutionsPage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
