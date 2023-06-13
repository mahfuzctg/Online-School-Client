import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../../assets/slides/slide-1.jpg";
import slide2 from "../../../assets/slides/slide-2.jpg";
import slide3 from "../../../assets/slides/slide-3.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <div className="">
          <img src={slide1} />
        </div>
        <div className="">
          <img src={slide2} />
        </div>
        <div className="">
          <img src={slide3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
