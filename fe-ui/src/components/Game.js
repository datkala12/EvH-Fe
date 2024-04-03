import "../style/detail.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Game() {
  const [data, setData] = useState([])
  let { id } = useParams();
  console.log("id", id)
  let [searchParams] = useSearchParams();
  let price = searchParams.get("price");
  console.log("search", price)

  const getListProduct = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products")
      return res.data
    } catch (error) {
      console.error("error", error)
    }
  }
  const fetchData = React.useCallback(async () => {
    try {
      const result = await getListProduct();
      setData(result);
      console.log("atat", result.filter((product) => (product.category.id == 1)))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [])

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <div className="Carousel">
      <div className="Card">
        <div className="Content grid grid-cols-4 gap gap-5">
          {data.filter((product) => (product.category.id == id && (!price ? true :
            (price == "1") ? product.price > 0 : product.price > 19.99
          ))).map((product) => (
            <div className="card w-auto bg-slate-100 shadow-xl">
              <div className="avatar">
                <figure className="px-10 pt-10">
                  <img
                    src={product.image_cover}
                    alt="AccGame"
                    className="rounded-xl"
                  />
                </figure>
              </div>
              <div className="card-body">
                <h2 className="card-title text-black text-left">
                  {product.name}
                </h2>
                <p className="text-orange-600 rank">{product.description}</p>
                <div className="tags col-span-2 grid grid-cols-2 ">
                  <span className="tag1">{product.type}</span>
                  <span className="tag2">Current Item {product.item}</span>
                </div>
                <div className="card-actions">
                  <p className="price  text-green-800 ">
                    {product.price}
                    <img src="https://res.cloudinary.com/deupkdvle/image/upload/v1710731589/dollar_rwszjr.png" />
                  </p>

                  <Link to={"/Gdetail/" + product.id} className="btn btn-outline btn-error">Buy now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Game;
