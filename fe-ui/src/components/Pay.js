import Footer from "./Footer.js";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from "react-router-dom";
import { useWallet } from '@solana/wallet-adapter-react'
import { Link } from "react-router-dom";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

function Pay() {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([])
  const { publicKey } = useWallet()
  let { id } = useParams();
  console.log("id", id)

  useEffect(() => {
    fetchCartItems();
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

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/cart/remove/${productId}`);
      fetchCartItems();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };


  return (
    <div className="Repon">
      <div className="name text-black font-bold text-2xl px-[5rem] mb-5">
        <h2>Cart</h2>
      </div>
      <div className="overflow-x-auto h-[23rem]  px-[5rem] mb-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Account</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          {/* Set data */}
          <tbody id="price">

            {/* {Object.values(cart).map(product => ( */}
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                          alt={product.name}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-amber-500">
                        {product.name}
                      </div>
                      <div className="text-sm text-green-500">{product.price}</div>
                    </div>
                  </div>
                </td>
                {/* <td>
                  Time:
                  <br />
                  <span className="badge badge-ghost badge-sm">{product.rentalDuration}</span>
                </td> */}
                <td>{product.type}</td>
                <th>
                  <button className="btn btn-ghost" onClick={() => removeFromCart(product.id)}>
                    Delete
                  </button>
                </th>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      <div className="buy text-right ">
        <Link to={"/Checkout"} className="btn btn-outline btn-success mb-5 mr-20 ">Checkout</Link>
        {/* <button
          className="btn btn-outline btn-success mb-5 mr-20 "
          onClick={() => document.getElementById("my_modal_3").showModal()}
          submitTarget='/checkout' enabled={publicKey !== null}
        >
          Checkout
        </button>
        <dialog id="my_modal_3" className="modal bg-slate-100">
          <div className="modal-box bg-slate-100">
            <form method="dialog">
              <button className="btn btn-sm absolute right-2 top-2">✕</button>
            </form>
            <div className="flex place-content-center ">
              <h3 className="font-bold text-lg ">
                Payment success
              </h3>
            </div>
          </div>
        </dialog> */}
      </div>
      <Footer />
    </div>
  );
}

export default Pay;
