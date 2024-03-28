import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import shopping from "../assets/shopping-cart.png"

const Layout = () => {
  return (
    <>
      <nav>
        <a href="#" className="logo text-orange-500">
          <Link to="/"> AccHub</Link>
        </a>
        {/* thanh công cụ*/}
        <div className="links">
          <a href="#">
            <Link to="/">Trang Chủ</Link>
          </a>
          <a href="#">
            <Link to="/About">Giới Thiệu</Link>
          </a>
          <a href="#">
            <Link to="/Contact">Liên Hệ</Link>
          </a>
        </div>

        <div className="cart">
          <button className="btn btn-outline"><img src={shopping}/></button>
          
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
