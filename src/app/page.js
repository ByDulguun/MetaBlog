"use client";
import { About } from "@/components/About";
import { AllBlog } from "@/components/AllBlog";
import { Header } from "@/components/Header";
import { Technology } from "@/components/Technology";
import { Trending } from "@/components/Trending";
import { useState } from "react";
import { useEffect } from "react";

const getArticle = async () => {
  const res = await fetch("https://dev.to/api/articles");

  const articles = await res.json();

  return articles;
};

export default function Home() {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const data = await getArticle();

    setArticles(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="m-0 p-0 box-border">
      <Header />
      <Technology articles={articles} />
      <Trending articles={articles} />
      <AllBlog articles={articles} />
      <About />
    </div>
  );
}
