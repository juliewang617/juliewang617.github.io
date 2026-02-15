import "./App.css";
// import BearlyUsedPage from "./components/BearlyUsedPage.tsx";
import HobbiesPage from "./components/HobbiesPage.tsx";
import HomePage from "./components/HomePage.tsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop.tsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hobbies" element={<HobbiesPage />} />
        {/* <Route path="/projects/bearly-used" element={<BearlyUsedPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
