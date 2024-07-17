"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const Blogs = ({ id }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles/${id}`);

        const data = await res.json();
        await setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(id);
    getArticle();
  }, [articles, id]);
  return (
    <div className="md:w-full md:h-fit mt-[100px] max-md:mx-4 ">
      <div className="grid w-full h-fit justify-center">
        <p className="text-center text-gray-800 text-[36px] font-semibold">
          {articles.title}
        </p>
        <p className="text-gray-500">{articles.readable_publish_date}</p>
        <img
          src={articles.cover_image}
          className="md:w-[800px] rounded-xl my-12 "
        />
        <p className="mb-20">{articles.description}</p>
      </div>
    </div>
  );
};
