import Footer from "./Footer";
import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/contact/submit', {
        email,
        fullname,
        message,
      });
      alert('Contact form submitted successfully!');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to submit contact form. Please try again later.');
    }
  };
  return (
    <div className="repon">
      <div className="container text-white px-[30rem] mb-5 p-5">
        <h1 className="text-2xl font-bold text-black text-center pb-10">Contact</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered rounded-lg w-full max-w-xs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="fullname"
            >
              Fullname:
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered rounded-lg w-full max-w-xs"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            className="textarea textarea-bordered rounded-lg w-full h-32 resize-none"
            id="message"
            name="message"
            placeholder="Message contents..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-600 text-black py-2 px-4 rounded-lg transition-all duration-200 float-right"
            type="submit"
          // onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Send
          </button>
          {/* <dialog id="my_modal_3" className="modal bg-slate-100">
            <div className="modal-box bg-slate-100">
              <form method="dialog">
                <button className="btn btn-sm absolute right-2 top-2">✕</button>
              </form>
              <div className="flex place-content-center ">
                <h3 className="font-bold text-lg text-white ">Send successful</h3>
              </div>
            </div>
          </dialog> */}
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
