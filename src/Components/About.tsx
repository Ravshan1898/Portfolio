import { GoDotFill } from "react-icons/go";
import Aboutpage3 from "../assets/images/aboutPage3.png";

const About: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById(
      "projects"
    ) as HTMLElement | null;
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about">
      <div className="container">
        <div className="about_box">
          <div className="about_info_box">
            <h2>Ravshan Shakirov</h2>
            <p>
              Ravshan Shakirov i’m a front-end developer based in Tashkent,
              Uzbekistan. I have developed many types of front-ends from
              well-known DJ applications to booking platforms.
            </p>
            <div className="about_info_mini-box">
              <button onClick={scrollToProjects}>Projects</button>
              <span>
                <GoDotFill className="about_icon" /> Developer
              </span>
            </div>
          </div>
          <div className="about_img_box2">
            <img src={Aboutpage3} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
