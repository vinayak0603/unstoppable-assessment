import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OurSolutionsPage from "./pages/OurSolutionsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/our-solutions" element={<OurSolutionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
