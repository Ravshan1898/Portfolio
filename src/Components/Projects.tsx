import Totembo from "../assets/images/Project1.png";
import VueCinema from "../assets/images/Project2.png";
import GoTrip from "../assets/images/Project3.png";
import OnlineShop from "../assets/images/Project4.png";
import OnlineMarket from "../assets/images/Project5.png";

const Projects = () => {
  return (
    <div className="container">
      <div className="projects">
        <h2>My Projects</h2>
        <div className="project_box">
          <div
            className="project_card"
            onClick={() =>
              window.open("https://ravshan1898.github.io/TOTEMBO/")
            }
          >
            <img src={Totembo} alt="Totembo project" />
            <h3>Totembo</h3>
          </div>
          <div
            className="project_card"
            onClick={() =>
              window.open("https://ravshan1898.github.io/Vue-Cinema/")
            }
          >
            <img src={VueCinema} alt="VueCinema project" />
            <h3>VueCinema</h3>
          </div>
          <div
            className="project_card"
            onClick={() => window.open("https://ravshan1898.github.io/GoTrip/")}
          >
            <img src={GoTrip} alt="GoTrip project" />
            <h3>GoTrip</h3>
          </div>
          <div
            className="project_card"
            onClick={() =>
              window.open("https://onlineshopdiplomproject11.netlify.app/")
            }
          >
            <img src={OnlineShop} alt="OnlineMarket" />
            <h3>OnlineShop</h3>
          </div>
          <div
            className="project_card"
            onClick={() => window.open("https://market1898.netlify.app/")}
          >
            <img src={OnlineMarket} alt="OnlineMarket" />
            <h3>OnlineMarket</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
