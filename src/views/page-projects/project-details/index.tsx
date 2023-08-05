"use client";
import NewestArrivals from "@/views/page-home/NewestArrivals";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ProjectDetailsUi = (props: Props) => {
  return (
    <>
      <motion.div
        className=" _container py-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
      >
        <div className=" flex justify-center flex-col items-center md:items-start mb-3">
          <p className="text-[#F5A800] md:text-base font-[500]">Our Projects</p>
          <h3 className="text-[#333333] md:font-[650] md:text-[36px] text-[20px] font-medium">
            True North Collective
          </h3>
        </div>
        <div className="w-[100%] md:h-[616px] relative h-[345px] mx-auto md:mx-0">
          <Image
            src={"/images/Rectangle 725.png"}
            fill
            alt=""
            className=" object-cover"
          />
        </div>
        <p className=" text-xs md:text-base font-medium text-[#5A5A5A] md:leading-[24px] pt-3 leading-[15px]">
          Lorem ipsum dolor sit amet consectetur. Enim consequat rhoncus eros
          proin. Cursus pellentesque ac vitae faucibus est massa tortor. Egestas
          in in arcu in magna non vulputate vestibulum id. Lobortis tincidunt
          cursus id diam ultrices. Sit donec aliquam facilisis ornare massa
          porttitor cursus eu. Vitae tempor auctor erat id et auctor diam at
          sit. Cras vitae egestas tristique non. Posuere sit est eu scelerisque
          sed faucibus ac aliquam. Risus odio nunc nisi interdum libero
          phasellus in. Ornare orci morbi pellentesque commodo tempor venenatis
          enim. Mauris risus eu amet sapien. <br className=" hidden md:block" />{" "}
          Sit neque aliquam accumsan felis sed. Mattis et lectus elit ridiculus
          eget egestas tincidunt non. A dui enim egestas ornare et amet. Sociis
          tellus eu sagittis volutpat. Ultricies massa convallis netus pulvinar
          pellentesque. Massa consectetur sed odio morbi. Turpis consectetur
          dictumst vitae tincidunt egestas enim maecenas id. Integer eget aenean
          magna odio platea blandit in. Ut maecenas a ac mauris dui sit nunc
          phasellus dolor. Porttitor iaculis ultricies vestibulum ut blandit.{" "}
          <br className=" hidden md:block" />
          Ultrices lectus enim maecenas tortor tempor faucibus. Malesuada enim
          non id lorem elementum pretium est aliquet adipiscing. Aliquet leo
          tellus quis nisl sodales sit. Sagittis elementum sit viverra ultrices.
          Semper et feugiat quam suspendisse. Tortor velit fames amet elit
          tempus. Tristique lectus faucibus a quis praesent dignissim interdum.
          Ut sit gravida nulla quam ultrices. Nibh diam dignissim justo
          imperdiet quis ut blandit. Augue vitae pellentesque eu non sit
          placerat venenatis ut. Augue fringilla rutrum urna posuere ultrices
          sed. Turpis mi elementum ut tincidunt enim proin ac et faucibus. Urna
          augue amet sodales consequat sollicitudin ac commodo. Id quis velit
          urna aliquam auctor massa tellus est ipsum. Eu massa a amet
          consectetur orci. Sagittis eleifend arcu ligula lectus fringilla odio
          fames. Id ullamcorper risus pellentesque iaculis phasellus pharetra
          leo.
          <br className=" hidden md:block" />
          Odio praesent purus interdum justo interdum nec habitant. Velit dolor
          venenatis aliquam quis maecenas pulvinar. Etiam lacinia a lacus
          aliquet eu tincidunt vitae dui. Vel quisque sit amet odio. Dolor in
          vel at proin arcu cras malesuada. Tristique ultricies eget pharetra
          aliquam ultricies aliquam maecenas ornare convallis. Bibendum auctor
          vestibulum auctor ut enim viverra semper fusce pellentesque. In a
          gravida enim tristique. Pellentesque nunc eu gravida integer facilisi
          sit fames at nullam. Dolor commodo et faucibus adipiscing parturient
          adipiscing non. Etiam nisi arcu non dictumst sed elit quis nulla nam
          elit ornare tellus.
        </p>
      </motion.div>
      <NewestArrivals />
    </>
  );
};

export default ProjectDetailsUi;
