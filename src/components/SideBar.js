"use client";

import { Metabloglogo } from "@/assets/icon/Metabloglogo";
import { Search } from "@/assets/icon/Search";
import Link from "next/link";
import { useState } from "react";

export const SideBar = () => {
  const [app] = useState([]);
  const [Views] = useState([]);
  const [contacts] = useState([]);
  return (
    <div className=" w-full h-[600px] m-auto z-10">
      <div className="p-6 md:flex  items-baseline justify-evenly md:mx-[168px] fixed ">
        <Link key={app.id} href={`/`}>
          <div>
            <Metabloglogo />
          </div>
        </Link>

        <div className="md:flex gap-3 grid h-fit mt-12">
          <Link key={app.id} href={`/`}>
            <button>Home </button>
          </Link>
          <div className="border mx-2 w-[300px] "></div>
          <Link key={Views} href={`/blogs`}>
            <button>Blog</button>
          </Link>
          <div className="border mx-2 w-[300px] "></div>
          <Link key={contacts.id} href={`/contact/${contacts.id}`}>
            <button>Contact</button>
          </Link>{" "}
          <div className="border mx-2 w-[300px] "></div>
        </div>
        <div className="md:flex mt-12  ">
          <Search />
        </div>
      </div>
    </div>
  );
};
