import Image from 'next/image';
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Slider from 'react-slick';

type Props = {};

const MobileView = (props: Props) => {
  return (
    <div className="lg:hidden">
      <Slider {...settings} arrows={true} className=" px-2 md:px-4">
        {productCardData.map((product, i) => (
          <div key={i} className="p-1">
            <Image
              src={product.img}
              width={110}
              height={110}
              className="w-auto h-[98px] object-cover rounded-[5px]"
              alt="slider"
            />
            <div className="flex items-center gap-2 my-2">
              <Image
                src="/images/productDetails/title-img.svg"
                width={20}
                height={20}
                className="object-cover rounded-t-md"
                alt="slider"
              />
              <h2 className="font-medium flex items-center text-[8px] text-[#767676]">
                <span className="">Hybrid </span>
                <span className="mx-1">|</span>
                <span> SERIES IV</span>
              </h2>
            </div>
            <hr className="my-2" />
            <p className="text-[10px] text-sc font-medium">{product.shop}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileView;
const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

function SampleNextArrow({ onClick }: any) {
  return (
    <FiChevronRight
      className="absolute right-0 top-[20%] text-3xl text-yellow-300 bg-white p-1 border-2 border-sc rounded-full cursor-pointer"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ onClick }: any) {
  return (
    <FiChevronLeft
      className="absolute left-0 top-[20%] text-3xl text-yellow-300 bg-white p-1 border-2 border-sc rounded-full cursor-pointer z-10"
      onClick={onClick}
    />
  );
}
const productCardData = [
  {
    img: '/images/productDetails/product-1.png',
    titleImg: '/images/productDetails/title-img.svg',
    shop: 'ROYAL DANK',
  },
  {
    img: '/images/productDetails/product-2.png',
    titleImg: '/images/productDetails/title-img.svg',
    shop: 'ROYAL DANK',
  },
  {
    img: '/images/productDetails/product-3.png',
    titleImg: '/images/productDetails/title-img.svg',
    shop: 'ROYAL DANK',
  },
  {
    img: '/images/productDetails/product-4.png',
    titleImg: '/images/productDetails/title-img.svg',
    shop: 'ROYAL DANK',
  },
  {
    img: '/images/productDetails/product-5.png',
    titleImg: '/images/productDetails/title-img.svg',
    shop: 'ROYAL DANK',
  },
];
