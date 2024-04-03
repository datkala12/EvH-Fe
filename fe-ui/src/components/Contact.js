import Footer from "./Footer";

function Contact() {
  return (
    <div className="repon">
      <div className="container text-black px-[30rem] mb-5 p-5">
        <h1 className="text-2xl font-bold text-center pb-10">Contact</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5">
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
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200 float-right"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Send
          </button>
          <dialog id="my_modal_3" className="modal bg-slate-100">
            <div className="modal-box bg-slate-100">
              <form method="dialog">
                <button className="btn btn-sm absolute right-2 top-2">✕</button>
              </form>
              <div className="flex place-content-center ">
                <h3 className="font-bold text-lg text-white ">Send successful</h3>
              </div>
            </div>
          </dialog>
          <br />
          {/* <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg"
                    type="submit"
                >
                    Gửi
                </button> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
