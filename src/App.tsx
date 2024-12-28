import "./App.css";
import BearlyUsedPage from "./components/BearlyUsedPage.tsx";
import CarpoolPage from "./components/CarpoolPage.tsx";
import EmailToCalPage from "./components/EmailToCalPage.tsx";
import EzEdPage from "./components/EzEdPage.tsx";
import HomePage from "./components/HomePage.tsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop.tsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/bearly-used" element={<BearlyUsedPage />} />
        <Route path="/projects/ez-ed" element={<EzEdPage />} />
        <Route path="/projects/carpool" element={<CarpoolPage />} />
        <Route path="/projects/email-to-cal" element={<EmailToCalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
