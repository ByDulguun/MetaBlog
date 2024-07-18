"use client";

import { About } from "@/components/About";
import { AllBlogSwitch } from "@/components/AllBlogSwitch";
import { Header } from "@/components/Header";

const { useParams } = require("next/navigation");

const BlogPage = () => {
  
  return (
    <>
      <Header />
      <AllBlogSwitch />
      <About />
    </>
  );
};

export default BlogPage;
