import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Gdetail() {

  const [cart, setCart] = useState(new Map());
  const [data, setData] = useState([])
  const negative = useNavigate();
  let { id } = useParams();
  console.log("id", id)
  let [searchParams] = useSearchParams();
  let price = searchParams.get("price");
  console.log("search", price)

  const getListProduct = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products/detail/" + id)
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

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/cart/items');
      setCart(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async (data) => {
    try {
      await axios.post('http://localhost:8080/api/cart/add', data);
      fetchCartItems();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };


  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Repon">
      <div className="name text-black px-[5rem] mb-5 text-2xl font-semibold">
        <h1>Account #{data?.id}/{data?.name}</h1>
      </div>
      <div className="grid grid-cols-12 px-[5rem] gap-5">
        <div className="card col-span-9">
          <div className="card w-auto h-auto bg-red-400 text-white shadow-xl">
            <div className="grid grid-cols-3 p-5">
              <div className="flex flex-col">
                <span className="font-bold">Id</span> <span>{data?.id}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Item</span>{" "}
                <span>{data?.item}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Rank</span> <span>{data?.rank}</span>
              </div>
            </div>
          </div>
          <div className="title">
            <h2 className="text-black text-xl p-5">{data?.description}</h2>
            <img
              className="p-5"
              src={data?.image_detail}
            />
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
                  {data?.type} by <span className="font-bold">AccShop</span>
                </span>
                <span className="font-body text-sm mt-auto italic">
                  Day join : {data?.dateCreate}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-thin">
                Vote: <span className="text-yellow-400 font-bold">3.6</span>{" "}
                (11)
              </span>
            </div>
            <div className="divider "></div>
            <div className="flex">
              <h4 className="grid items-center font-bold">Supported</h4>
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
                <span className="text-yellow-400 font-bold">{data?.price}</span>
              </div>
              <div className="ms-auto">
                <span className="font-thin">
                  Thành tiền:
                  <span className="text-yellow-400 font-bold">{data?.price}</span>
                </span>
              </div>
            </div>
            <div className="divider "></div>
            <div className="sell grid">
              <Link to={"/Pay"} className="btn btn-outline btn-error" onClick={() => addToCart({ id: data?.id, name: data?.name, price: data?.price, time: data?.rental_duration, type: data?.type })}>
                Buy now
              </Link>
              {/* <Link to={"/Pay/" + data?.id} className="btn btn-outline btn-error" onClick={() => addToCart({ id: data?.id, name: data?.name, price: data?.price, time: data?.rental_duration, type: data?.type })}>
                Buy now
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gdetail;
