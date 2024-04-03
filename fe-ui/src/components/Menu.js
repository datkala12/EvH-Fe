import { BrowserRouter, NavLink, Routes, Route, Navigate, Link, Switch } from "react-router-dom";
import '../style/homePage.css';
import axios from "axios";
import React, { useState } from "react";

function Menu() {
  const [data, setData] = useState([])

  const getListProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/categories`)

      console.log("products: ", res)

      return res.data
    } catch (error) {
      console.error("error", error)
    }
  }
  const fetchData = React.useCallback(async () => {
    try {
      const result = await getListProduct();
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
    <div className="Card">
      <div className="Content grid grid-cols-4 gap gap-5">
        {data.map(
          (category) => (
            <div className="card card-compact w-auto h-auto bg-slate-100 shadow-xl ">
              <figure>
                <img
                  src={category.cate_image}
                  alt="Game"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-body-dark">{category.name}</h2>
                <div className="card-actions justify-end">
                  <Link to={'/Detail/' + category.id} className="btn btn-primary">More</Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
export default Menu;
