"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import Carousel from "@/components/react/Carouzel";
import { POLECANE_PRODUKTY, PRODUCENCI } from "@/constants/Links";
import Link from "next/link";

const settings = {
  dots: false,
  dotsClass: "slick-dots slick-thumb",
  arrows: false,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 3000,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  customPaging: function () {
    return (
      <div
        className={`z-10 h-3 w-3 cursor-pointer rounded-full bg-color/30 transition-colors hover:bg-color/60`}
      ></div>
    );
  },
};

export default function Home() {
  return (
    <>
      <Carousel />
      <section className="bg-white py-24 px-3">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="pb-12 text-3xl font-bold">Producenci</h2>

          <div className="py-4 text-center">
            <Slider {...settings}>
              {PRODUCENCI.map((img) => (
                <div className="w-full max-w-screen-2xl outline-0">
                  <img
                    src={img.imgSrc}
                    alt="..."
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="bg-color/10 py-24 px-3">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="pb-12 text-3xl font-bold">Polecane produkty</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            {POLECANE_PRODUKTY.slice(0, 10).map((product) => (
              <div className="flex flex-col items-start justify-start transition-all space-y-3 rounded-sm bg-white p-1 overflow-hidden border-2 border-transparent hover:scale-105 duration-300 hover:border-color/50 ">
                <img className="w-auto sm:h-40 mx-auto object-cover" src={product.img} />
                <div className="flex flex-col p-4">
                  <h3 className="md:text-lg text-base font-bold w-full sm:h-12">{product.title.slice(0,50)}</h3>
                  <div className="flex items-center justify-end text-2xl text-red-600">
                    <p>{product.price}</p>
                    <p>zł</p>
                  </div>
                  <Link
                    href="/"
                    className="mt-8  w-full bg-color py-3 text-center text-sm font-bold text-white"
                  >
                    Do Koszyka
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
