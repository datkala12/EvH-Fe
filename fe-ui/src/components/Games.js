import { BrowserRouter, NavLink, Routes, Route, Navigate, Link, Switch } from "react-router-dom";
import '../style/homePage.css';

function Games(){
    return(
        <div className="flex flex-col gap-10 lg:flex-row mx-10">
        <div class="card w-auto h-auto bg-base-100 shadow-xl">
          <figure><img src="https://i.pinimg.com/564x/b7/c3/74/b7c37459fd385307a16718db986212fa.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Liên Minh Huyền Thoại</h2>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Xem thêm</button>
            </div>
          </div>
        </div>

        <div class="card w-auto h-auto bg-base-100 shadow-xl">
          <figure><img src="https://i.pinimg.com/564x/11/dd/5a/11dd5acd77f75a9b2db171a77d5b3adf.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Liên Minh Mobile</h2>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Xem thêm</button>
            </div>
          </div>
        </div>

        <div class="card w-auto h-auto bg-base-100 shadow-xl">
          <figure><img src="https://i.pinimg.com/564x/21/25/52/212552d9e8f98742c4c42b5c195d92c9.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Valorant</h2>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Xem thêm</button>
            </div>
          </div>
        </div>

        <div class="card w-auto h-auto bg-base-100 shadow-xl">
          <figure><img src="https://i.pinimg.com/564x/3a/a6/ad/3aa6ad5458875d220a786ad3ddfc2e68.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Đấu Trường Chân Lý</h2>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Xem thêm</button>
            </div>
          </div>
        </div>
        </div> 
    )
}
export default Games;
