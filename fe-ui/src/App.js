import React from "react";
// import main from "./pages/users/homePage/main";
import TodoList from "./components/TodoList";
import 'daisyui/dist/full.css';
import './style/homePage.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter, NavLink, Routes, Route, Navigate, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/">
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <title>Responsive NFT Website</title>
        <nav>
          <a href="#" className="logo">
            EventHub NFT
          </a>
          <div className="links">
            <a href="#"><Link to="/">TRANG CHỦ</Link></a>
            <a href="#"><Link to="/about">GIỚI THIỆU</Link></a>
            <a href="#"><Link to="/contact">LIÊN HỆ</Link></a>
          </div>
          <div className="login">
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>ĐĂNG KÝ</button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold flex text-lg text-center">Register Form</h3>
                <div className="modal-content">
                  <form method="dialog" className="space-y-4">
                    <div className="form-control">
                      <label htmlFor="email" className="label">Email</label>
                      <input type="email" id="email" className="input input-bordered" placeholder="Enter your email" />
                    </div>
                    <div className="form-control">
                      <label htmlFor="password" className="label">Password</label>
                      <input type="password" id="password" className="input input-bordered" placeholder="Enter your password" />
                    </div>
                  </form>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Register</button>
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>ĐĂNG NHẬP</button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold flex text-lg text-center">Login Form</h3>
                <div className="modal-content">
                  <form method="dialog" className="space-y-4">
                    <div className="form-control">
                      <label htmlFor="email" className="label">Email</label>
                      <input type="email" id="email" className="input input-bordered" placeholder="Enter your email" />
                    </div>
                    <div className="form-control">
                      <label htmlFor="password" className="label">Password</label>
                      <input type="password" id="password" className="input input-bordered" placeholder="Enter your password" />
                    </div>
                  </form>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Login</button>
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </nav>
        <header>
          <div className="left">
            <h1>
              Dùng thử ngay <span>EventHub NFT</span>
            </h1>
            <p>
              Một sản phẩm, dự án do nhóm thực tập sinh phát triển nhằm cung cấp
              phương thức thanh toán mới thuận tiện hơn cho mọi người
            </p>
            <a href="#">
              <i className="bx bx-basket" />
              <span>Mua ngay</span>
            </a>
          </div>
          <img src="./assets/header.png" />
        </header>
        <h2 className="separator">Thanh toán NFT của bạn</h2>
        <div className="sell-nft">
          <div className="item">
            <div className="header">
              <i className="bx bx-wallet-alt" />
              <h5>Liên kết với ví</h5>
            </div>
            <p>
              Liên kết với ví Solona để thực hiện các giao dịnh trên thị trường NFT
            </p>
          </div>
          <div className="item">
            <div className="header">
              <i className="bx bx-cart-alt" />
              <h5>Thị trường NFT</h5>
            </div>
            <p>
              Là nơi giao thương buôn bán giữa mọi người với nhau cũng như là nơi tham
              khảo día cả thị trường
            </p>
          </div>
          <div className="item">
            <div className="header">
              <i className="bx bx-grid-alt" />
              <h5>Sử dụng app</h5>
            </div>
            <p>
              Tiện ích giúp khác hàng dễ dàng truy cập cũng như giao dịch mọi lúc mọi
              nơi thông qua các thiết bị khác
            </p>
          </div>
        </div>
        <h2 className="separator">Các NFT nổi bật</h2>
        <div className="nft-shop">
          <div className="category">
            <a href="#">EventHub NFT</a>
            <a href="#">Xu hướng</a>
          </div>
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
        <div className="view-more">
          <button>Xem thêm</button>
        </div>
        <h2 className="separator">Top Giao dịch</h2>
        <div className="sellers">
          <div className="item">
            <img src="./assets/profile-1.png" />
            <div className="info">
              <h4>An An</h4>
              <p>15.2K</p>
            </div>
          </div>
          <div className="item">
            <img src="./assets/profile-2.png" />
            <div className="info">
              <h4>Anh Tú</h4>
              <p>12.7K</p>
            </div>
          </div>
          <div className="item">
            <img src="./assets/profile-3.png" />
            <div className="info">
              <h4>Đạt Đạt</h4>
              <p>7.9K</p>
            </div>
          </div>
          <div className="item">
            <img src="./assets/profile-4.png" />
            <div className="info">
              <h4>Tuấn kiệt</h4>
              <p>4.2K</p>
            </div>
          </div>
        </div>
        <footer>
          <h3>Tạo, khám phá, kinh doanh EventHub NFT </h3>
          <div className="right">
            <div className="links">
              <a href="#">Privacy Policy</a>
              <a href="#">Cooperation</a>
              <a href="#">Sponsorship</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="social">
              <i className="bx bxl-instagram" />
              <i className="bx bxl-facebook-square" />
              <i className="bx bxl-github" />
            </div>
            <p>Copyright © 2024 AsmrProg, All Rights Reserved.</p>
          </div>
        </footer>
      </>
    </BrowserRouter>
  )
}

export default App;
