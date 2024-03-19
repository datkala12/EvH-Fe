import "../style/detail.css";
import Game from "./Game.js";
import Footer from "./Footer.js";

function Detail() {
  return (
    <div className="details">
      <div className="image-container relative h-[350px] overflow-hidden">
        <img
          className="blur-image absolute translate-y-[-25%] "
          src={"https://beelevelup.com/assets/img/category/banner/2.jpg"}
          alt=""
        />
        <div className="text-overlay absolute top-1/2 left-10 font-bold text-4xl z-[2] text-lime-50 shadow-1">
          Liên Minh Huyền Thoại
        </div>
      </div>

      <div className="about">
        <div className="card lg:card-side bg-white shadow-xl">
          <figure>
            <div className="avatar">
              <div className="w-96 rounded">
                <img src="https://i.pinimg.com/564x/89/7c/7c/897c7cca1273993224d4e4d86e26a043.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-title">
            <h2 className="card-title text-black p-2">
              Liên Minh Huyền Thoại (LMHT) được ra mắt vào ngày 27 tháng 10 năm
              2009 bởi công ty Riot Games. LMHT lấy bối cảnh trong thế giới hư
              cấu Runeterra, nơi các nhà hùng biến thành các tướng chiến đấu
              trong các trận đấu 5 người chống 5 người. Trò chơi nổi tiếng với
              đồ họa đẹp mắt, lối chơi chiến thuật sâu sắc, và một loạt các
              tướng đa dạng với các kỹ năng độc đáo.{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex place-content-between px-10">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Danh Mục
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-slate-100 rounded-box w-52"
          >
            <li>
              <a>Random 99K</a>
            </li>
            <li>
              <a>100K đến 300K</a>
            </li>
          </ul>
        </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-80 bg-slate-100"
            />
          </div>
      </div>
      <Game />
      <Footer/>
    </div>
  );
}
export default Detail;
