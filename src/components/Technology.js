import { Lefticon } from "@/assets/icon/Lefticon";
import { Righticon } from "@/assets/icon/Righticon";
import { TechnologyCards } from "./TecnologyCards";
import { useState, useEffect } from "react";

export const Technology = ({ articles }) => {
  return (
    <div className="w-screen h-screen ">
      <div className=" w-[390px] h-[600px] rounded-xl overflow-hidden flex">
        <div className="slider">
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
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <button className="border rounded-lg px-3 py-2">
          <Lefticon />
        </button>
        <button className="border rounded-lg px-3 py-2">
          <Righticon />
        </button>
      </div>
    </div>
  );
};
