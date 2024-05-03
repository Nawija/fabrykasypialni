"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import h1 from "../../../public/hero/h1.jpg";
import h3 from "../../../public/hero/h3.jpg";
import h4 from "../../../public/hero/h4.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    fade: false,
    dotsClass: "slick-dots slick-thumb",
    arrows: false,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 3600,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function () {
      return (
        <div
          className={`z-10 h-3 w-3 cursor-pointer rounded-full bg-color/30 transition-colors hover:bg-color/60`}
        ></div>
      );
    },
  };

  return (
    <div className="py-8 text-center">
      <Slider {...settings}>
        <div className="w-full max-w-screen-2xl outline-0">
          <Image src={h1} alt="..." className="object-cover object-center" />
        </div>

        <div className="w-full max-w-screen-2xl outline-0">
          <Image src={h3} alt="..." className="object-cover object-center" />
        </div>
        <div className="w-full max-w-screen-2xl outline-0">
          <Image src={h1} alt="..." className="object-cover object-center" />
        </div>

        <div className="w-full max-w-screen-2xl outline-0">
          <Image src={h4} alt="..." className="object-cover object-center" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
