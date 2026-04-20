import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OurSolutionsPage from "./pages/OurSolutionsPage";
import CommunitiesPage from "./pages/CommunitiesPage";
import ClientelePage from "./pages/ClientelePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DisclaimerPopup from "./components/DisclaimerPopup";

function App() {
  return (
    <Router>
      <DisclaimerPopup />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/our-solutions" element={<OurSolutionsPage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
        <Route path="/clientele" element={<ClientelePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
