import Game from "./Game";
import "../style/gdetail.css";
import Footer from "./Footer";

function Gdetail() {
  return (
    <div className="Repon">
      <div className="name text-black px-[5rem] mb-5">
        <h1>Tài Khoản #001/Liên Minh Huyền Thoại</h1>
      </div>
      <div className="grid grid-cols-12 px-[5rem] gap-5">
        <div className="card col-span-9">
          <div className="card w-auto h-auto bg-red-400 text-white shadow-xl">
            <div className="grid grid-cols-3 p-5">
              <div className="flex flex-col">
                <span className="font-bold">Tướng</span> <span>Random</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Trang Phục</span>{" "}
                <span>Random</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Rank</span> <span>Unrank</span>
              </div>
            </div>
          </div>
          <div className="title">
            <h2 className="text-black text-xl p-5">Chưa Rank Mùa Nào Lv30</h2>
            <img className="p-5" src="https://res.cloudinary.com/deupkdvle/image/upload/v1700906537/hue_qm6jwk.webp" />
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="border rounded-lg p-6 mb-3">
            <div className="flex gap-3 mb-3">
              <div className="avatar">
                <div className="w-11 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base">
                  Bán bởi <span className="font-bold">Bán Vì Đam Mê</span>
                </span>
                <span className="font-body text-sm mt-auto italic">
                  Tham gia từ 25.06.2023
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-thin">
                Đánh giá: <span className="text-yellow-400 font-bold">3.6</span>{" "}
                (11 lượt)
              </span>
              <span className="font-thin">
                Đã bán: <span className="text-yellow-400 font-bold">74</span>
              </span>
            </div>
            <div className="divider "></div>
            <div className="flex">
              <h4 className="grid items-center font-bold">Hỗ trợ</h4>
              <div className="ms-auto flex gap-3">
                <div className="avatar">
                  <div className="w-11 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-11 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-11 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <div className="flex">
              <span className="font-thin">Giá: </span>
              <div className="flex">
                <span className="text-yellow-400 font-bold">
                  250
                  
                </span>
              </div>
              <div className="ms-auto">
                <span className="font-thin">
                  Thành tiền:
                  <span className="text-yellow-400 font-bold">250.000</span>
                </span>
              </div>
            </div>
            <div className="divider "></div>
            <div className="sell grid">
              <button className="btn btn-outline btn-error">Mua Ngay</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gdetail;
