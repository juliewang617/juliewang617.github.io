import "../App.css";
import About from "./About.tsx";
import Divider from "./Divider.tsx";
import Footer from "./Footer.tsx";
// import Fun from "./Fun.tsx";
import Navbar from "./Navbar.tsx";
import Projects from "./Projects.tsx";

const HomePage: React.FC = () => {
  return (
    <div className="container-fluid main-content">
      <Navbar />
      <About />
      <Divider />
      <Projects />
      <Divider />
      {/* <Fun /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
