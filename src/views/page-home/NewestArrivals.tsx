import React, { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import { SectionTitle } from "../reuseable-ui/sectionTitle";
import { Motion1 } from "@/utils/framer-motion";
import CannabisCard from "@/components/cards/card_cannabis";

type Props = {};

const NewestArrivals = (p: Props) => {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="bg-[url(/images/newest-arival-bg.png)] bg-cover bg-center bg-no-repeat py-10 md:py-10">
      <div className=" _container  ">
        <SectionTitle title="High Quality Cannabis" subtitle="Newest Arrivals">
          <div className="flex gap-x-3">
            <div
              className="h-[45px] w-[45px] bg-white flex items-center justify-center cursor-pointer"
              onClick={handlePrev}
            >
              <AiOutlineArrowLeft size={20} />
            </div>
            <div
              className="h-[45px] w-[45px] bg-white flex items-center justify-center cursor-pointer"
              onClick={handleNext}
            >
              <AiOutlineArrowRight size={20} />
            </div>
          </div>
        </SectionTitle>

        <Slider {...settings} ref={sliderRef} className="-mx-1">
          {data.map(d => (
            <Motion1 key={d.id} delay={d.id * 0.1}>
              <CannabisCard img={d.img} bg={d.bg} />
            </Motion1>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewestArrivals;

const data = [
  {
    id: 1,
    img: "/images/product-1.png",
    bg: "bg-pc",
  },
  {
    id: 2,
    img: "/images/product-2.png",
    bg: "bg-[#17AEDF]",
  },
  {
    id: 3,
    img: "/images/product-1.png",
    bg: "bg-pc",
  },
  {
    id: 4,
    img: "/images/product-1.png",
    bg: "bg-pc",
  },
  {
    id: 5,
    img: "/images/product-2.png",
    bg: "bg-pc",
  },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
      },
    },
  ],
};
