import { Outlet, Link } from "react-router-dom";
import Contact from "./Contact.js";
import About from "./About.js";

function Footer() {
  return (
    <footer>
      <h3>AccHub Solana Payment</h3>
      <div className="right">
        <div className="links">
          <a href="https://solana.com/privacy-policy">Privacy Policy</a>
          <a href="https://docs.solana.com/developers">Document</a>
          <a href="#">
            <Link to="/About">Our Foundation</Link>
          </a>
          <a href="#">
            <Link to="/Contact">Contact Us</Link>
          </a>
        </div>
        <div className="social">
          <i className="bx bxl-instagram" />
          <i className="bx bxl-facebook-square" />
          <i className="bx bxl-github" />
        </div>
        <p>Copyright © 2024 Group 5 - AccHub, All Rights Reserved.</p>
      </div>
    </footer>
  )
}
export default Footer;