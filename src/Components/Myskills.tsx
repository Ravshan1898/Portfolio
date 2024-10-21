import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

const Myskills = () => {
  return (
    <div className="container">
      <div className="myskills">
        <h2>My skills</h2>
        <div className="myskills_box">
          <h3>
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design
          </h3>
          <div className="myskills_icon_box">
            <div className="myskill_icon">
              <FaHtml5 className="Html" />
            </div>
            <div className="myskill_icon">
              <IoLogoCss3 className="Css" />
            </div>
            <div className="myskill_icon">
              <FaSass className="Sass" />
            </div>
            <div className="myskill_icon">
              <SiTypescript className="Ts" />
            </div>
            <div className="myskill_icon">
              <SiJavascript className="Js" />
            </div>
            <div className="myskill_icon">
              <FaReact className="React" />
            </div>
            <div className="myskill_icon">
              <FaNode className="Node" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myskills;
