"use client";

import { About } from "@/components/About";
import { Blogs } from "@/components/Blogs";
import { Header } from "@/components/Header";

const { useParams } = require("next/navigation");

const BlogPage = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <Blogs id={id} />
      <About />
    </>
  );
};

export default BlogPage;
