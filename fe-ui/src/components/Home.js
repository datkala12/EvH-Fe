import { Link } from "react-router-dom";
import "../style/homePage.css";
import Footer from "./Footer";
function Home() {
  return (
    <div className="repon">
      <header>
        <div className="left">
          <h1>
            Dùng thử ngay <span>EventHub NFT</span>
          </h1>
          <p>
            Một sản phẩm, dự án do nhóm thực tập sinh phát triển nhằm cung cấp
            phương thức thanh toán mới thuận tiện hơn cho mọi người
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/deupkdvle/image/upload/v1710071225/5468a33bc43e258995f15ad01e5ad7cc-removebg-preview_dnldln.png"
          alt="hình ảnh"
        />
      </header>

      {/* Games */}
      <div className="Card">
        <div className="Content grid grid-cols-4 gap gap-5">
          <div className="card card-compact w-auto h-auto bg-base-100 shadow-xl ">
            <figure>
              <img
                src="https://i.pinimg.com/564x/db/61/f8/db61f876d8f9c43da04d66a6052402d6.jpg"
                alt="Game"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Liên Minh Huyền Thoại</h2>
              <div className="card-actions justify-end">
                <Link to="/a" className="btn btn-primary">Xem Thêm</Link>
              </div>
            </div>
          </div>

          <div className="card card-compact w-auto h-auto bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.pinimg.com/564x/11/dd/5a/11dd5acd77f75a9b2db171a77d5b3adf.jpg"
                alt="Game"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Liên Minh Mobile</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Xem Thêm</button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-auto h-auto bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.pinimg.com/564x/21/25/52/212552d9e8f98742c4c42b5c195d92c9.jpg"
                alt="Game"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Valorant</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Xem Thêm</button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-auto h-auto bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.pinimg.com/564x/3a/a6/ad/3aa6ad5458875d220a786ad3ddfc2e68.jpg"
                alt="Game"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Đấu Trường Chân Lý</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Xem Thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accgame */}
      <div className="Acc">
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
      </div>
      <Footer />
    </div>
  );
}
export default Home;
