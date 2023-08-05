"use client";
import ButtonPrimary from "@/components/butttons/ButtonPrimary";
import SliderCard from "@/components/cards/SliderCard";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
// import BannarSlider from './Carousel/BannarSlider';
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const BannarSlider = dynamic(() => import("./Carousel/BannarSlider"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 md:h-[500px] bg-red-50 animate-pulse rounded-md shadow p-5">
    </div>
  ),
});

type Props = {};

const HomeBannar = (props: Props) => {
  const [goToSlide, setGoToSlide] = useState(1);
  const router = useRouter();

  // cards data
  let cards = [
    {
      key: 1,
      content: <SliderCard imgs="/images/dankos-1.png" tw={"bg-[#986BA0]"} />,
    },
    {
      key: 2,
      content: <SliderCard imgs="/images/dankos-2.png" tw={"bg-[#17AEDF]"} />,
    },
    {
      key: 3,
      content: <SliderCard imgs="/images/dankos-3.png" tw={"bg-pc"} />,
    },
  ];

  const handleSetGotoSLide = (i: any) => {
    setGoToSlide(i);
  };

  //   btn shadow css
  const Style = {
    boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.06)",
  };

  return (
    <div className="banner max-h-[700px] flex items-center pt-28 pb-10">
      <div className="_container grid md:grid-cols-2 justify-center items-center grid-cols-1 gap-10">
        <div className="col-span-1">
          <h2 className=" text-[30px] font-[650] leading-[36px] mb-6 text-center md:text-[50px] md:leading-[62px] md:text-left md:mb-8 text-[#333333]">
            A Single Tools Manage your dispensary Operation
          </h2>
          <div className="flex justify-center md:justify-start">
            <ButtonPrimary
              onClick={() => router.push("/strains")}
              style={Style}
              iconRight={<MdArrowOutward />}
              tw="py-4 shadow"
            >
              Explore
            </ButtonPrimary>
          </div>
        </div>
        <div className="relative col-span-1">
          <div className="w-5/6 mx-auto px-2 lg:px-0">
            <BannarSlider
              cards={cards}
              height="500px"
              width="100%"
              margin="0 auto"
              offset={2}
              goToSlide={goToSlide}
              setGoToSlide={handleSetGotoSLide}
              showArrows={false}
            />
            <div className="flex justify-center items-center gap-4 ">
              {cards?.map((data, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full flex justify-center items-center transition-all duration-300 ${
                    index == goToSlide ? "scale-105 border-2" : ""
                  }`}
                >
                  <button
                    onClick={() => handleSetGotoSLide(index)}
                    className={`w-2 h-2 rounded-full cursor-pointer z-10 ${
                      index == goToSlide ? " bg-black" : "border border-black"
                    }`}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* slider */}
      </div>
    </div>
  );
};

export default HomeBannar;
