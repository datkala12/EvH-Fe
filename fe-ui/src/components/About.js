import Footer from "./Footer";

function About() {
  return (
    <div className="repon">
      <div className="title text-black text-3xl font-bold text-center">
        <h1>Giới Thiệu</h1>
      </div>
      <div className="container px-[5rem] mb-5 p-5 mt-8 text-black">
        <p className="text-lg mb-4">
          Trang web của chúng tôi được tạo ra với mục đích cung cấp một nền tảng
          toàn diện cho cộng đồng game thủ, nơi mà họ có thể dễ dàng tìm kiếm,
          mua bán và cho thuê các tài khoản game theo nhu cầu của mình. Dù bạn
          là một người chơi giải trí thích khám phá các thế giới mới hay một
          game thủ chuyên nghiệp đang tìm kiếm tài khoản cấp độ cao để tham gia
          vào các cuộc chiến đỉnh cao, chúng tôi cam kết mang lại cho bạn trải
          nghiệm tốt nhất.
        </p>
        <p className="text-lg mb-4">
          Với một cộng đồng đa dạng và phong phú, chúng tôi tự hào là một điểm
          đến đáng tin cậy và an toàn cho mọi game thủ. Bằng cách cung cấp một
          giao diện trực tuyến thuận tiện và tiện ích, chúng tôi đảm bảo rằng
          quá trình mua bán và cho thuê tài khoản của bạn sẽ diễn ra một cách
          mượt mà và an toàn nhất có thể.
        </p>
        <p className="text-lg mb-4">
          Sự đảm bảo về tính bảo mật và đáng tin cậy là ưu tiên hàng đầu của
          chúng tôi. Tất cả các giao dịch được thực hiện thông qua trang web của
          chúng tôi đều được mã hóa và bảo vệ bởi các biện pháp an ninh nghiêm
          ngặt, đảm bảo rằng thông tin cá nhân của bạn luôn được bảo vệ.
        </p>
        <p className="text-lg">
          Hãy khám phá trang web của chúng tôi ngay hôm nay và trải nghiệm sự
          thuận tiện, an toàn và đáng tin cậy khi tìm kiếm và giao dịch các tài
          khoản game. Chúng tôi cam kết mang lại cho bạn trải nghiệm tốt nhất,
          giúp bạn tìm thấy tài khoản game hoàn hảo cho cuộc phiêu lưu của mình!
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
