import "../style/detail.css";

function Detail({ imageUrl, text }) {
  return (
    <div className="details">
      <div className="image-container relative h-[350px] overflow-hidden before:w-full ">
          <img className="blur-image absolute translate-y-[-25%]" src={'https://beelevelup.com/assets/img/category/banner/2.jpg'} alt="" />
          <div className="text-overlay absolute top-1/2 left-10 font-bold text-4xl">Liên Minh Huyền Thoại</div>
      </div>
    </div>
  );
}
export default Detail;
