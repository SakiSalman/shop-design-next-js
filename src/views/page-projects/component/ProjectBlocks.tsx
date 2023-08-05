"use client";
import ButtonPrimary from "@/components/butttons/ButtonPrimary";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  imageRight?: boolean;
  src: string;
};

const ProjectBlocks = (p: Props) => {
  const router = useRouter();

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2">
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative h-[350px] lg:h-[500px] ${
          p.imageRight && "md:order-1"
        }`}
      >
        <Image
          fill
          src={p.src}
          alt=""
          className="object-cover rounded-md"
          placeholder="blur"
          blurDataURL={p.src}
        />
      </motion.div>
      <motion.div
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div
          className={`bg-white py-5 pr-7 lg:py-12 md:px-10 rounded-lg md:absolute md:top-1/2 md:-translate-y-1/2 card_shadow ${
            p.imageRight ? "md:-right-28" : "md:-left-28"
          }`}
        >
          <h6 className="text-base md:text-2xl font-medium text-pc">
            Our Projects
          </h6>
          <h3 className="text-xl md:text-4xl text-sc font-font650 py-3">
            True North Collective
          </h3>
          <p className="text-gray65 text-xs md:text-base font-medium leading-relaxed mb-5">
            True North Collective, also known as TNC, is a well-known company
            that we chose to collaborate with due to their versatility of
            products and vast knowledge within the industry
          </p>
          <ButtonPrimary primary onClick={() => router.push("/projects/1")}>
            Learn More
          </ButtonPrimary>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectBlocks;
