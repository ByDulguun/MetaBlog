"use client";

import { About } from "@/components/About";
import { Header } from "@/components/Header";
import Link from "next/link";
import { useState } from "react";

const NotFound = () => {
  const [app] = useState([]);

  return (
    <div>
      <Header />
      <div className="md:w-screen md:h-full max-md:mx-12 ">
        <div className="md:flex  md:items-center my-[200px] md:justify-center md:gap-12 max-md:grid h-fit justify-center ">
          <div className="text-black text-[72px]">
            <h1>404</h1>
          </div>
          <div className="md:border md:h-[156px] md:w-[1px] max-md:border h-[1px] w-[200px]"></div>

          <div className="h-fit grid gap-4">
            <h1 className="text-[24px] font-semibold"> Page Not Found</h1>
            <p className="text-gray-600 text-[18px] md:w-[360px]">
              {`We're sorry, This page is unknown or does not exist the page you
              are looking for.`}
            </p>
            <Link key={app.id} href={`/`}>
              <button className="bg-[#4B6BFB] py-2 px-4 text-white rounded-md w-fit">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default NotFound;
