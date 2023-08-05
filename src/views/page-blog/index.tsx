"use client";
import React, { Fragment, useState } from "react";
import NewsCard from "@/components/cards/card_news";
import { Motion1 } from "@/utils/framer-motion";

type Props = {};

const BlogUI = (props: Props) => {
  const [active, setActive] = useState(1);
  return (
    <Fragment>
      <div className="_container py-10">
        <div className="grid lg:grid-cols-3 gap-2">
          {[...Array(9)].map((data, i) => (
            <Motion1 key={i} delay={i * 0.1} from="right">
              <NewsCard img={`/images/blog/blog (${i + 1}).png`} />
            </Motion1>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 py-10">
          {[...Array(3)].map((_, i) => (
            <button
              key={i}
              className={`w-10 h-10 border hover:bg-pc transition-all duration-500 ${
                i == active ? "bg-pc" : "bg-white"
              }`}
              onClick={() => setActive(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default BlogUI;
