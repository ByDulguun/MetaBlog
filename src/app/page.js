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

const { useParams } = require("next/navigation");

const Home = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/`);

        const data = await res.json();

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

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
      {data.map((item) => (
        <div key={item.title}>
          <h1>{item.title}</h1>
        </div>  
      ))}
    </div>
  );
};
export default Home;
