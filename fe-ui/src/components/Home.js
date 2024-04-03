import { Link } from "react-router-dom";
import "../style/homePage.css";
import Footer from "./Footer";
import Menu from "./Menu";
import headerimg from "../assets/header.png";
function Home() {
  return (
    <div className="repon">
      <header>
        <div className="left">
          <h1>
            Try now <span>AccHub</span>
          </h1>
          <p>
            A product or project developed by an intern team aims to provide a new,
            more convenient payment method for everyone.
          </p>
        </div>
        <img
          src={headerimg}
          alt="hình ảnh"
        />
      </header>

      {/* Games */}
      <Menu />
      <Footer />
    </div>
  );
}
export default Home;
