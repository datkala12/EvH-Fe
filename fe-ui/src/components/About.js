import Footer from "./Footer";

function About() {
  return (
    <div className="repon">
      <div className="title text-black text-3xl font-bold text-center">
        <h1>About Us</h1>
      </div>
      <div className="container px-[5rem] mb-5 p-5 mt-8 text-black">
        <p className="text-lg mb-4">
          Our website is created with the purpose of providing a comprehensive platform for the gaming community,
          where they can easily search, buy, and rent game accounts according to their needs. Whether you are a
          casual gamer who enjoys exploring new worlds or a professional gamer seeking high-level accounts to
          participate in top-level battles, we are committed to providing you with the best experience.
        </p>
        <p className="text-lg mb-4">
          With a diverse and rich community, we pride ourselves on being a reliable and safe destination for all
          gamers. By providing a convenient and user-friendly online interface, we ensure that the process of
          buying and renting accounts will be as smooth and safe as possible.
        </p>
        <p className="text-lg mb-4">
          Ensuring security and reliability is our top priority. All transactions made through our website are
          encrypted and protected by strict security measures, ensuring that your personal information is always
          protected.
        </p>
        <p className="text-lg">
          Explore our website today and experience the convenience, safety, and reliability when searching for
          and trading game accounts. We are committed to providing you with the best experience, helping you find
          the perfect game account for your adventure!
        </p>
      </div>
      <div className="divider"></div>
      <div className="member">
        <h1 className="text-2xl font-bold text-center p-10 text-orange-500">
          OUR TEAM
        </h1>
        <div className="flex justify-center">
          <div className="relative p-10">
            <img
              class="mask mask-circle"
              src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
            />
            <br />
            <p className="text-black text-center">Nguyễn Thành Đạt</p>
          </div>
          <div className="relative p-10">
            <img
              class="mask mask-circle"
              src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
            />
            <br />
            <p className="text-black text-center">Võ Đình Anh Tú</p>
          </div>
          <div className="relative p-10">
            <img
              class="mask mask-circle"
              src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
            />
            <br />
            <p className="text-black text-center">Trương Thị Kiều An</p>
          </div>
          <div className="relative p-10">
            <img
              class="mask mask-circle"
              src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
            />
            <br />
            <p className="text-black text-center">Võ Thanh Tuấn Kiệt</p>
          </div>
          <div className="relative p-10">
            <img
              class="mask mask-circle"
              src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
            />
            <br />
            <p className="text-black text-center">Phan Minh Huy</p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
