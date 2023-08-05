"use client";
import React, { Fragment, useState } from "react";
import ButtonPrimary from "@/components/butttons/ButtonPrimary";
import Image from "next/image";
import styles from "./productDetails.module.css";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import MobileView from "./mobileView";

type Props = {};

const ProductDetailsUi = (props: Props) => {
  const [active, setActive] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide: any) => setActive(currentSlide),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="_container pt-8 pb-24">
      <div className=" grid grid-cols-1 lg:grid-cols-8 gap-4">
        <div className="lg:col-span-6 border rounded-lg order-1 lg:order-none">
          <Slider
            {...settings}
            customPaging={(i: any) => (
              <div className="flex gap-12 justify-between">
                <div
                  className={`${
                    active === i
                      ? "bg-pc -mx-3 w-10 h-2"
                      : "bg-[#D9D9D9] w-4 h-2"
                  } my-4 rounded-full`}
                />
              </div>
            )}
          >
            {[1, 2].map((slide, i) => (
              <Image
                key={i}
                src={`/images/productDetails/slider-1.png`}
                width={938}
                height={750}
                className="rounded-t-md"
                alt="slider"
              />
            ))}
          </Slider>
          <div className=" px-8 py-4">
            <div className="flex items-center gap-4 mt-6 mb-4">
              <Image
                src="/images/productDetails/title-img.svg"
                width={45}
                height={45}
                className="object-cover rounded-t-md"
                alt="slider"
              />
              <h2 className="text-xs md:text-base text-[#767676] font-medium flex items-center">
                <span className="md:text-xl">Hybrid </span>
                <span className="mx-3 text-3xl font-thin">|</span>
                <span> SERIES IV</span>
              </h2>
            </div>
            <h3 className="text-xl md:text-4xl font-medium">Honolulu Punch</h3>
            <hr className="my-4" />
            <div className="grid sm:grid-cols-2 gap-6 my-6">
              {productDetails.map((productDetail, i) => (
                <div key={i}>
                  <h2 className="md:text-2xl text-sc font-medium">
                    {productDetail.title}
                  </h2>
                  <p className="text-xs md:text-base text-[#5C5C5C] font-medium">
                    {productDetail.desc}
                  </p>
                </div>
              ))}
            </div>
            <ButtonPrimary primary tw="px-4">
              Find near you
            </ButtonPrimary>
          </div>
        </div>
        <div
          className={`${styles.product} max-h-[155vh] lg:col-span-2 border rounded-[5px] overflow-y-auto p-4 hidden lg:block`}
        >
          {productCardData.map((product, i) => (
            <div key={i} className="mb-4">
              <Image
                src={product.img}
                width={228}
                height={132}
                className="w-auto h-auto object-cover rounded-[5px]"
                alt="slider"
              />
              <div className="flex items-center gap-4 my-2">
                <Image
                  src="/images/productDetails/title-img.svg"
                  width={20}
                  height={20}
                  className="object-cover rounded-t-md"
                  alt="slider"
                />
                <h2 className="font-medium flex items-center text-[#767676]">
                  <span className="md:text-xl">Hybrid </span>
                  <span className="mx-3 text-3xl font-thin">|</span>
                  <span> SERIES IV</span>
                </h2>
              </div>
              <hr className="my-2" />
              <p className="text-xl text-sc font-medium">{product.shop}</p>
            </div>
          ))}
        </div>
        {/* Mobile view */}
        <div className="w-full mx-auto">
          <MobileView />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsUi;

const productDetails = [
  {
    title: "Aroma",
    desc: "Tangy, Lemon, Citrus",
  },
  {
    title: "Aroma",
    desc: "Creative, Energizing, Happy",
  },
  {
    title: "FLAVOR",
    desc: "Citrus, Berry, Fruity, Sweet",
  },
  {
    title: "AVAILABLE IN",
    desc: "3.5G Pre-Pack, 1G Handcraft, 2G Handcraft",
  },
];
const productCardData = [
  {
    img: "/images/productDetails/product-1.png",
    titleImg: "/images/productDetails/title-img.svg",
    shop: "Royal Dank"
  },
  {
    img: "/images/productDetails/product-2.png",
    titleImg: "/images/productDetails/title-img.svg",
    shop: "Royal Dank"
  },
  {
    img: "/images/productDetails/product-3.png",
    titleImg: "/images/productDetails/title-img.svg",
    shop: "Royal Dank"
  },
  {
    img: "/images/productDetails/product-4.png",
    titleImg: "/images/productDetails/title-img.svg",
    shop: "Royal Dank"
  },
  {
    img: "/images/productDetails/product-5.png",
    titleImg: "/images/productDetails/title-img.svg",
    shop: "Royal Dank"
  },
];
function SampleNextArrow({ onClick }: any) {
  return (
    <BsArrowRightShort
      className={`absolute -right-3 md:-right-4 top-[28%] md:top-1/2 -translate-y-1/2 text-2xl md:text-4xl text-sc bg-white p-1 rounded cursor-pointer`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ onClick }: any) {
  return (
    <BsArrowLeftShort
      className={`absolute -left-3 md:-left-4 top-[28%] md:top-1/2 -translate-y-1/2 text-2xl md:text-4xl text-sc bg-white p-1 rounded cursor-pointer z-10`}
      onClick={onClick}
    />
  );
}
