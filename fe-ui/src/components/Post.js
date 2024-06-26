import Footer from "./Footer";

function Post() {
  return (
    <div className="repon">
      <div className="container text-black px-[30rem] mb-5 ">
        <h1 className="text-2xl font-bold text-center text-lime-500 p-8">
          Game selling account Form
        </h1>
        <div className="mt-2 pt-3 pb-5">
          <label htmlFor="fullname" className="font-bold">
            Game:
          </label>
          <select
            name="game"
            id="game"
            className="text-white rounded-lg w-full h-12 bg-slate-800"
          >
            <option value="LMHT">League of Legends</option>
            <option value="CS2">Counter-Strike 2</option>
            <option value="V">Valorant</option>
            <option value="D2">Dota 2</option>
            <option value="PUBG">PlayerUnknown's Battlegrounds</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="input input-bordered rounded-lg w-full max-w-xs text-white"
            />
          </div>
          <div>


            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Price expectation
            </label>
            <input
              type="price"
              placeholder="..."
              className="input input-bordered rounded-lg w-full max-w-xs text-white"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            Description
          </label>
          <textarea
            className="textarea textarea-bordered rounded-lg w-full h-32 resize-none text-white"
            id="message"
            name="message"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="mt-4 pb-5">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200 float-right"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Request
          </button>
          <dialog id="my_modal_3" className="modal bg-slate-100">
            <div className="modal-box bg-slate-100">
              <form method="dialog">
                <button className="btn btn-sm absolute right-2 top-2">✕</button>
              </form>
              <div className="flex place-content-center ">
                <h3 className="font-bold text-lg text-white ">Request send</h3>
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

export default Post;
