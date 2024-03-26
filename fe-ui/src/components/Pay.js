import "../style/pay.css";
import Footer from "./Footer.js";
function Pay() {
  return (
    <div className="Repon">
      <div className="name text-black font-bold text-2xl px-[5rem] mb-5">
        <h2>Giỏ Hàng</h2>
      </div>
      <div className="overflow-x-auto  px-[5rem] mb-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label onClick={onClick}>
                  <input type="checkbox" className="checkbox" id="tong" />
                </label>
              </th>
              <th>Tên Acc</th>
              <th>Thời Gian</th>
              <th>Loại</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="price">
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox ds" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.pinimg.com/564x/f8/41/ed/f841ed83f6899b264aef4dd651d5ec1a.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-amber-500">
                      Liên Minh Huyền Thoại
                    </div>
                    <div className="text-sm text-green-500">250.000VNĐ</div>
                  </div>
                </div>
              </td>
              <td>
                Thời Gian:
                <br />
                <span className="badge badge-ghost badge-sm">Vĩnh Viễn</span>
              </td>
              <td>Mua</td>
              <th>
                <button className="btn btn-ghost" onClick={handleClick}>
                  Xóa
                </button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox ds" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.pinimg.com/564x/f8/41/ed/f841ed83f6899b264aef4dd651d5ec1a.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-amber-500">
                      Liên Minh Mobile
                    </div>
                    <div className="text-sm  text-green-500">210.000VNĐ</div>
                  </div>
                </div>
              </td>
              <td>
                Thời Gian:
                <br />
                <span className="badge badge-ghost badge-sm">1 Tháng</span>
              </td>
              <td>Thuê</td>
              <th>
                <button className="btn btn-ghost" onClick={handleClick}>
                  Xóa
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox ds" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.pinimg.com/564x/f8/41/ed/f841ed83f6899b264aef4dd651d5ec1a.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-orange-500">Valorant</div>
                    <div className="text-sm text-green-500">300.000VNĐ</div>
                  </div>
                </div>
              </td>
              <td>
                Thời Gian:
                <br />
                <span className="badge badge-ghost badge-sm">Vĩnh Viễn</span>
              </td>
              <td>Mua</td>
              <th>
                <button onClick={handleClick} className="btn btn-ghost">
                  Xóa
                </button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox ds" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.pinimg.com/564x/f8/41/ed/f841ed83f6899b264aef4dd651d5ec1a.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-orange-500">
                      Đấu Trường Chân Lý
                    </div>
                    <div className="text-sm text-green-500">280.000</div>
                  </div>
                </div>
              </td>
              <td>
                Thời Gian:
                <br />
                <span className="badge badge-ghost badge-sm">3 Tháng</span>
              </td>
              <td>Thuê</td>
              <th>
                <button onClick={handleClick} className="btn btn-ghost">
                  Xóa
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buy text-right ">
        <button
          className="btn btn-outline btn-success mb-5 mr-20 "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Thanh Toán
        </button>
        <dialog id="my_modal_3" className="modal bg-slate-100">
          <div className="modal-box bg-slate-100">
            <form method="dialog">
              <button className="btn btn-sm absolute right-2 top-2">✕</button>
            </form>
            <div className="flex place-content-center ">
              <h3 className="font-bold text-lg ">
                Thanh Toán Thành Công
              </h3>
            </div>
          </div>
        </dialog>
      </div>
      <Footer />
    </div>
  );
}
const handleClick = (e) => {
  const parent = document.getElementById("price");
  e.target.parentElement.parentElement.remove();
};

const onClick = (e) => {
  const clickTong = document.getElementById("tong");
  const listCheck = document.getElementsByClassName("ds");
  console.log(clickTong);
  for (const element of listCheck) {
    element.checked = clickTong.checked;
  }
};

export default Pay;
