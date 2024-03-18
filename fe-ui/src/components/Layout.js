import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <nav>
        <a href="#" className="logo">
          AccHub
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

        <div className="login">
          <button
            className="btn btn-outline btn-info"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Đăng Ký
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg text-center">Đăng Ký</h3>
              <div className="modal-content">
                <form method="dialog">
                  <div className="form-control">
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="pass" className="label">
                      Mật Khẩu
                    </label>
                    <input
                      type="pass"
                      id="pass"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="enter pass" className="label">
                      Xác Nhận Mật Khẩu
                    </label>
                    <input
                      type="enter pass"
                      id="enter pass"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="name" className="label">
                      Tên Hiển Thị
                    </label>
                    <input
                      type="name"
                      id="name"
                      className="input input-bordered"
                    />
                  </div>
                </form>
                <div className="modal-action">
                  <button class="btn btn-outline btn-accent">Đăng Ký</button>
                </div>
              </div>
            </div>
          </dialog>

          {/* đăng nhập */}
          <button
            className="btn btn-outline btn-success"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Đăng Nhập
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg text-center">Đăng Nhập</h3>
              <div className="modal-content">
                  <form method="dialog">
                    <div className="form-control">
                      <label htmlFor="email" className="label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="pass" className="label">
                        Mật Khẩu
                      </label>
                      <input
                        type="pass"
                        id="pass"
                        className="input input-bordered"
                      />
                    </div>
                    
                    
                  </form>
                  <div className="modal-action">
                    <button class="btn btn-outline btn-accent">Đăng Nhập</button>
                  </div>
                </div>

            </div>
          </dialog>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
