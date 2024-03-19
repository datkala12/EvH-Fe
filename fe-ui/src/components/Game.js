import "../style/detail.css";
import {  Link } from "react-router-dom";
function Game() {
  return (
    <div className="Carousel">
      <div className="Card">
        <div className="Content grid grid-cols-4 gap gap-5">
          <div className="card w-auto bg-slate-100 shadow-xl">
            <div className="avatar">
              <figure className="px-10 pt-10">
                <img
                  src="https://cdn-img.thethao247.vn/upload/lenhung/2020/09/24/1-110720-1.jpg"
                  alt="AccGame"
                  className="rounded-xl"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title text-black text-left">
                Liên Minh Huyền Thoại
              </h2>
              <p className="text-orange-600 rank">Chưa Rank Mùa Nào Lv30</p>
              <div className="tags col-span-2 grid grid-cols-2 ">
                <span className="tag1">Tướng: 21</span>
                <span className="tag2">Trang Phục:6</span>
              </div>
              <div className="card-actions">
                <p className="price  text-green-800 ">
                  250
                  <img src="https://res.cloudinary.com/deupkdvle/image/upload/v1710731589/dollar_rwszjr.png" />
                </p>

                <Link to="/Gdetail" className="btn btn-outline btn-error">Mua Ngay</Link>
              </div>
            </div>
          </div>

          <div className="card w-auto bg-slate-100 shadow-xl">
            <div className="avatar">
              <figure className="px-10 pt-10">
                <img
                  src="https://cdn-img.thethao247.vn/upload/lenhung/2020/09/24/1-110720-1.jpg"
                  alt="AccGame"
                  className="rounded-xl"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title text-black text-left">
                Liên Minh Huyền Thoại
              </h2>
              <p className="text-orange-600 rank">Chưa Rank Mùa Nào Lv30</p>
              <div className="tags col-span-2 grid grid-cols-2 ">
                <span className="tag1">Tướng:33</span>
                <span className="tag2">Trang Phục:10</span>
              </div>
              <div className="card-actions">
                <p className="price  text-green-800 ">
                  250
                  <img src="https://res.cloudinary.com/deupkdvle/image/upload/v1710731589/dollar_rwszjr.png" />
                </p>

                <button className="btn btn-outline btn-error">Mua Ngay</button>
              </div>
            </div>
          </div>

          <div className="card w-auto bg-slate-100 shadow-xl">
            <div className="avatar">
              <figure className="px-10 pt-10">
                <img
                  src="https://cdn-img.thethao247.vn/upload/lenhung/2020/09/24/1-110720-1.jpg"
                  alt="AccGame"
                  className="rounded-xl"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title text-black text-left">
                Liên Minh Huyền Thoại
              </h2>
              <p className="text-orange-600 rank">Chưa Rank Mùa Nào Lv30</p>
              <div className="tags col-span-2 grid grid-cols-2 gap-2">
                <span className="tag1">Tướng:</span>
                <span className="tag2">Trang Phục:</span>
              </div>
              <div className="card-actions">
                <p className="price  text-green-800 ">
                  250
                  <img src="https://res.cloudinary.com/deupkdvle/image/upload/v1710731589/dollar_rwszjr.png" />
                </p>

                <button className="btn btn-outline btn-error">Mua Ngay</button>
              </div>
            </div>
          </div>

          <div className="card w-auto bg-slate-100 shadow-xl">
            <div className="avatar">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pinimg.com/564x/f8/41/ed/f841ed83f6899b264aef4dd651d5ec1a.jpg"
                  alt="AccGame"
                  className="rounded-xl"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title text-black text-left">
                Liên Minh Huyền Thoại
              </h2>
              <p className="text-orange-600 rank">Chưa Rank</p>
              <div className="tags col-span-2 grid grid-cols-2 gap-2">
                <span className="tag1">Tướng: 23</span>
                <span className="tag2">Trang Phục:1</span>
              </div>
              <div className="card-actions">
                <p className="price  text-green-800 ">
                  180
                  <img src="https://res.cloudinary.com/deupkdvle/image/upload/v1710731589/dollar_rwszjr.png" />
                </p>

                <button className="btn btn-outline btn-error">Mua Ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Card">
        <div className="Content grid grid-cols-4 gap gap-5">
        <div className="card w-auto bg-slate-100 shadow-xl">
            <div className="avatar">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pinimg.com/564x/f8/41/ed/f841ed83f6899b264aef4dd651d5ec1a.jpg"
                  alt="AccGame"
                  className="rounded-xl"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title text-black text-left">
                Liên Minh Huyền Thoại
              </h2>
              <p className="text-orange-600 rank">Chưa Rank</p>
              <div className="tags col-span-2 grid grid-cols-2 gap-2">
                <span className="tag1">Tướng: 23</span>
                <span className="tag2">Trang Phục:1</span>
              </div>
              <div className="card-actions">
                <p className="price  text-green-800 ">
                  180
                  <img src="https://res.cloudinary.com/deupkdvle/image/upload/v1710731589/dollar_rwszjr.png" />
                </p>

              <button className="btn btn-outline btn-error">Mua Ngay</button>
              </div>
            </div>
          </div>

          <div className="card w-auto bg-slate-100 shadow-xl">
            <div className="avatar">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pinimg.com/564x/f8/41/ed/f841ed83f6899b264aef4dd651d5ec1a.jpg"
                  alt="AccGame"
                  className="rounded-xl"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title text-black text-left">
                Liên Minh Huyền Thoại
              </h2>
              <p className="text-orange-600 rank">Chưa Rank</p>
              <div className="tags col-span-2 grid grid-cols-2 gap-2">
                <span className="tag1">Tướng: 23</span>
                <span className="tag2">Trang Phục:1</span>
              </div>
              <div className="card-actions">
                <p className="price  text-green-800 ">
                  180
                  <img src="https://res.cloudinary.com/deupkdvle/image/upload/v1710731589/dollar_rwszjr.png" />
                </p>

                <button className="btn btn-outline btn-error">Mua Ngay</button>
              </div>
            </div>
          </div>

          <div className="card w-auto bg-slate-100 shadow-xl">
            <div className="avatar">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pinimg.com/564x/d5/4b/0d/d54b0de5fec96b7401cecb726fc5bdfc.jpg"
                  alt="AccGame"
                  className="rounded-xl"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title text-black text-left">
                Liên Minh Huyền Thoại
              </h2>
              <p className="text-orange-600 rank">Trắng thông tin - Unrank all mùa</p>
              <div className="tags col-span-2 grid grid-cols-2 gap-2">
                <span className="tag1">Tướng: 19</span>
                <span className="tag2">Trang Phục:7</span>
              </div>
              <div className="card-actions">
                <p className="price  text-green-800 ">
                  190
                  <img src="https://res.cloudinary.com/deupkdvle/image/upload/v1710731589/dollar_rwszjr.png" />
                </p>

                <button className="btn btn-outline btn-error">Mua Ngay</button>
              </div>
            </div>
          </div>

          <div className="card w-auto bg-slate-100 shadow-xl">
            <div className="avatar">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pinimg.com/564x/d5/4b/0d/d54b0de5fec96b7401cecb726fc5bdfc.jpg"
                  alt="AccGame"
                  className="rounded-xl"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title text-black text-left">
                Liên Minh Huyền Thoại
              </h2>
              <p className="text-orange-600 rank">Trắng thông tin - Unrank all mùa</p>
              <div className="tags col-span-2 grid grid-cols-2 gap-2">
                <span className="tag1">Tướng: 19</span>
                <span className="tag2">Trang Phục:7</span>
              </div>
              <div className="card-actions">
                <p className="price  text-green-800 ">
                  190
                  <img src="https://res.cloudinary.com/deupkdvle/image/upload/v1710731589/dollar_rwszjr.png" />
                </p>

                <button className="btn btn-outline btn-error">Mua Ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Game;
