import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Myskills from "./Components/Myskills";
import Projects from "./Components/Projects";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <About />
      </section>
      <section id="about">
        <Myskills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
