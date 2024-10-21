import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="contact_card">
            <div className="icon_box">
              <FaTelegram className="telegram_icon" />
              <h2>Write To Telegram</h2>
            </div>
            <a href="https://t.me/ravshan_141" target="Error :(">
              admin: @ravshan_141
            </a>
          </div>
          <div className="contact_card">
            <div className="icon_box">
              <FaInstagram className="instagram_icon" />
              <h2>Write To Instagram</h2>
            </div>
            <a href="https://instagram.com/_ravshan_141" target="_blank">
              admin: _ravshan_141
            </a>
          </div>
          <div className="contact_card">
            <div className="icon_box">
              <CgMail className="email_icon" />
              <h2>Write To Email</h2>
            </div>
            <a href="mailto:rshokirov@862gmail.com" target="_blank">
              admin: rshokirov@862gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
