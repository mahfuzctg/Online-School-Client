import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slideImg from "../../../assets/";
const Banner = () => {
  return (
    <Carousel>
      <div>
        <h1>carooooooo</h1>
        <img src={slideImg} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Banner;
