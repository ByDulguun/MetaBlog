"use client";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";

const { useParams } = require("next/navigation");

const contactBlog = () => {
  return (
    <div>
      <Header />
      <Contact />
      <About />
    </div>
  );
};

export default contactBlog;
