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

      {/* Accgame */}
      {/* <div className="Acc">
        <h2 className="separator">Các NFT nổi bật</h2>

        <div className="carousel w-full grid grid-cols-4 gap-5">
          <div className="nft-list">
            <div className="item">
              <img src="./assets/item-1.png" />
              <div className="info">
                <div>
                  <h5>Crypto</h5>
                  <div className="btc">
                    <i className="bx bxl-bitcoin" />
                    <p>0.29 SOL</p>
                  </div>
                </div>
                <p>5 of 33</p>
              </div>
              <div className="bid">
                <p>2h 28m 1s</p>
                <a href="#">Đặt hàng</a>
              </div>
            </div>
            <div className="item">
              <img src="./assets/item-2.png" />
              <div className="info">
                <div>
                  <h5>Abs-Art</h5>
                  <div className="btc">
                    <i className="bx bxl-bitcoin" />
                    <p>0.21 SOL</p>
                  </div>
                </div>
                <p>7 of 12</p>
              </div>
              <div className="bid">
                <p>1h 28m 1s</p>
                <a href="#">Đặt hàng</a>
              </div>
            </div>
            <div className="item">
              <img src="./assets/item-3.png" />
              <div className="info">
                <div>
                  <h5>TestArt</h5>
                  <div className="btc">
                    <i className="bx bxl-bitcoin" />
                    <p>0.21 SOL</p>
                  </div>
                </div>
                <p>9 of 23</p>
              </div>
              <div className="bid">
                <p>4h 21m 1s</p>
                <a href="#">Đặt hàng</a>
              </div>
            </div>
            <div className="item">
              <img src="./assets/item-4.png" />
              <div className="info">
                <div>
                  <h5>Art-4</h5>
                  <div className="btc">
                    <i className="bx bxl-bitcoin" />
                    <p>0.45 SOL</p>
                  </div>
                </div>
                <p>1 of 33</p>
              </div>
              <div className="bid">
                <p>0h 28m 1s</p>
                <a href="#">Đặt hàng</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
export default Home;
