import "../style/detail.css";
import Game from "./Game.js";
import Footer from "./Footer.js";
import React, { useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

function Detail() {
  const [data, setData] = useState([])
  let { id } = useParams();
  console.log("id", id)
  let location = useLocation();
  console.log("location", location)
  const getListCate = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/categories/detail/" + id)
      return res.data
    } catch (error) {
      console.error("error", error)
    }
  }
  const fetchData = React.useCallback(async () => {
    try {
      const result = await getListCate();
      setData(result);
      console.log("atat", result)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [])
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="details">
      <div className="image-container relative h-[350px] overflow-hidden">
        <img
          className="blur-image absolute translate-y-[-25%] "
          src={data?.cate_cover}
          alt=""
        />
        <div className="text-overlay absolute top-1/2 left-10 font-bold text-4xl z-[2] text-lime-50 shadow-1">
          {data?.name}
        </div>
      </div>

      <div className="about">
        <div className="card lg:card-side bg-white shadow-xl">
          <figure>
            <div className="avatar">
              <div className="w-96 rounded">
                <img src={data?.cate_image} />
              </div>
            </div>
          </figure>
          <div className="card-title">
            <h2 className="card-title text-black p-2">
              {data?.cate_des}{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex place-content-between px-10">
        <div>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              Price sort
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-slate-100 rounded-box w-52"
            >
              <li>
                <a href={location.pathname + "?price=1"}>All</a>
              </li>
              <li>
                <a href={location.pathname + "?price=2"}>Over 20$</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              Type sort
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-slate-100 rounded-box w-52"
            >
              <li>
                <a href={location.pathname + "?type='All'"}>All</a>
              </li>
              <li>
                <a href={location.pathname + "?type='Sell'"}>Sell</a>
              </li>
              <li>
                <a href={location.pathname + "?type='Rent'"}>Rent</a>
              </li>
            </ul>
          </div>
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
      <Footer />
    </div>
  );
}
export default Detail;
