"use client";
import "./style.css";
import React from "react";
import ButtonPrimary from "@/components/butttons/ButtonPrimary";
import NewsCard from "@/components/cards/card_news";
import { MdArrowOutward } from "react-icons/md";
import Strains from "@/components/cards/Strains";
import SeriesCard from "@/components/cards/SeriesCard";
import { CiLocationOn } from "react-icons/ci";
import NewestArrivals from "./NewestArrivals";
import { useRouter } from "next/navigation";
import HomeBannar from "./HomeBannar";
import { Motion1 } from "@/utils/framer-motion";
import { SectionTitle } from "../reuseable-ui/sectionTitle";

type Props = {};

const HomeUi = (p: Props) => {
  const router = useRouter();

  return (
    <>
      {/* home bannar  */}
      <HomeBannar />

      {/* home bannar end */}
      <div className=" _container pt-48 md:pt-10 pb-10">
        <SectionTitle title="The Categories" subtitle="Browse by Strain">
          <div className=" hidden md:block">
            <ButtonPrimary
              onClick={() => router.push("/strains")}
              tw="py-4"
              iconRight={<MdArrowOutward />}
            >
              Explore More
            </ButtonPrimary>
          </div>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Motion1 key={i} delay={i * 0.1}>
              <SeriesCard shadow tw="py-5" />
            </Motion1>
          ))}
        </div>
        <div className=" md:hidden flex items-center justify-center mt-5">
          <ButtonPrimary
            onClick={() => router.push("/strains")}
            iconRight={<MdArrowOutward />}
            primary
          >
            Explore More
          </ButtonPrimary>
        </div>
      </div>
      <NewestArrivals />

      <div className=" _container pt-8 pb-16 ">
        <SectionTitle title="High Quality Cannabis" subtitle="Our Strains">
          <div className=" hidden md:block">
            <ButtonPrimary
              onClick={() => router.push("/strains")}
              tw="py-4"
              iconRight={<MdArrowOutward />}
            >
              Explore More
            </ButtonPrimary>
          </div>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            // <Strains />
            <Motion1 key={i} delay={i * 0.1}>
              <Strains />
            </Motion1>
          ))}
        </div>
      </div>
      <div className="bg-[url(/images/newest-arival-bg.png)] bg-cover bg-center bg-no-repeat py-10">
        <div className=" _container py-8 ">
          <SectionTitle title="Nearest Location" subtitle="Michigan Retailers">
            <ButtonPrimary
              primary
              iconRight={
                <CiLocationOn
                  size={15}
                  className="text-[#333333] group-hover:text-white"
                />
              }
              tw=" bg-[#F5A800] text-[#333333] text-xs lg:text-[14px] md:px-2 whitespace-nowrap px-[4px]"
            >
              Find a Store
            </ButtonPrimary>
          </SectionTitle>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26548525.275622666!2d-117.03734930686123!3d35.68225184913227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1690537012408!5m2!1sen!2sbd"
            width="100%"
            height="511px"
            loading="lazy"
            className="rounded-md"
          ></iframe>
        </div>
      </div>

      <div className=" _container py-8">
        <SectionTitle title="Articles" subtitle="Latest News">
          <div></div>
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Motion1 key={i} delay={i * 0.1}>
              <NewsCard img={"/images/news-1.png"} />
            </Motion1>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeUi;
