"use client";

import { Lefticon } from "@/assets/icon/Lefticon";
import { Righticon } from "@/assets/icon/Righticon";
import { TechnologyCards } from "./TecnologyCards";
import { useState, useEffect } from "react";

export const Technology = ({ articles }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleLeftClick = () => {
    setCarouselIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCarouselIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-screen overflow-hidden h-screen">
      <div
        className="w-[400%] rounded-xl flex duration-300 "
        style={{ transform: `translateX(-${carouselIndex * 25}%)` }}
      >
        {articles &&
          articles
            .slice(0, 4)
            .map((item) => (
              <TechnologyCards
                key={item.cover_image}
                image={item.cover_image}
                tag={item.tags}
                title={item.title}
                readable_publish_date={item.readable_publish_date}
              />
            ))}
      </div>

      <div className="flex justify-center gap-2 mt-4 md:justify-end md:mr-[520px]">
        <button
          className="border rounded-lg px-3 py-2"
          onClick={handleLeftClick}
        >
          <Lefticon />
        </button>
        <button
          className="border rounded-lg px-3 py-2"
          onClick={handleRightClick}
        >
          <Righticon />
        </button>
      </div>
    </div>
  );
};
