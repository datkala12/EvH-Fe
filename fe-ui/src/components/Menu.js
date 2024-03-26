import { BrowserRouter, NavLink, Routes, Route, Navigate, Link, Switch } from "react-router-dom";
import '../style/homePage.css';

function Menu(){
    return(
      <div className="Card">
      <div className="Content grid grid-cols-4 gap gap-5">
        <div className="card card-compact w-auto h-auto bg-slate-100 shadow-xl ">
          <figure>
            <img
              src="https://i.pinimg.com/564x/db/61/f8/db61f876d8f9c43da04d66a6052402d6.jpg"
              alt="Game"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-body-dark">Liên Minh Huyền Thoại</h2>
            <div className="card-actions justify-end">
              <Link to="/Detail" className="btn btn-primary">Xem Thêm</Link>
            </div>
          </div>
        </div>

        <div className="card card-compact w-auto h-auto bg-slate-100 shadow-xl">
          <figure>
            <img
              src="https://i.pinimg.com/564x/11/dd/5a/11dd5acd77f75a9b2db171a77d5b3adf.jpg"
              alt="Game"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-body-dark">Liên Minh Mobile</h2>
            <div className="card-actions justify-end">
              <Link to="/Detail" className="btn btn-primary">Xem Thêm</Link>
            </div>
          </div>
        </div>

        <div className="card card-compact w-auto h-auto bg-slate-100 shadow-xl">
          <figure>
            <img
              src="https://i.pinimg.com/564x/21/25/52/212552d9e8f98742c4c42b5c195d92c9.jpg"
              alt="Game"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-body-dark">Valorant</h2>
            <div className="card-actions justify-end">
              <Link to="/Detail" className="btn btn-primary">Xem Thêm</Link>
            </div>
          </div>
        </div>

        <div className="card card-compact w-auto h-auto bg-slate-100 shadow-xl">
          <figure>
            <img
              src="https://i.pinimg.com/564x/3a/a6/ad/3aa6ad5458875d220a786ad3ddfc2e68.jpg"
              alt="Game"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-body-dark">Đấu Trường Chân Lý</h2>
            <div className="card-actions justify-end">
              <Link to="/Detail" className="btn btn-primary">Xem Thêm</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Menu;
