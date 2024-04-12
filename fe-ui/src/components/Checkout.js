import Footer from "./Footer.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { useWallet } from '@solana/wallet-adapter-react'
import React, { useState, useEffect } from 'react';

function Checkout() {
    const [cart, setCart] = useState([]);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const { publicKey } = useWallet()
    const [checkoutData, setCheckoutData, setOrder] = useState([]);

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

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCheckout = () => {
        // Logic to handle checkout data submission
        // Here you can send the data to your backend or perform any other action
        // For demonstration purposes, let's just log the data to the console
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Checkout Data:', checkoutData);

    };

    return (
        <div className="Repon">

            <div className="p-4">
                <h2 className="text-center text-2xl color-primary-content">Checkout</h2>
                <div className="flex justify-center items-center p-4">
                    <div className="mb-4 p-5">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered w-full max-w-xs"
                            value={fullName}
                            onChange={handleFullNameChange}
                        />
                    </div>
                    <div className="mb-4 p-5">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                </div>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Time</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product, index) => (
                            <tr key={product.id}>
                                <td style={{ fontWeight: 'bold', color: 'black' }}>{index + 1}</td>
                                <td style={{ fontWeight: 'bold', color: 'black' }}>{product.name}</td>
                                <td style={{ fontWeight: 'bold', color: 'black' }}>{product.type}</td>
                                <td style={{ fontWeight: 'bold', color: 'black' }}>{product.rentalDuration}</td>
                                <td style={{ fontWeight: 'bold', color: 'black' }}>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 text-center">
                    <button className="btn btn-primary m-5"
                        onClick={() => document.getElementById("my_modal_3").showModal()}
                        enabled={publicKey !== null}
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
                    </dialog>
                    <Link to={"/"} className="btn btn-primary">
                        Back Home
                    </Link>
                </div>

            </div>
            <Footer />
        </div>
    );

}
export default Checkout;