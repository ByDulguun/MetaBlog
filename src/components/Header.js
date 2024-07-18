"use client";

import Link from "next/link";
import { Menuicon } from "../assets/icon/Menuicon";
import { Metabloglogo } from "../assets/icon/Metabloglogo";
import { Search } from "../assets/icon/Search";
import { useState } from "react";

import { MenuClose } from "@/assets/icon/MenuClose";
import { SideBar } from "./SideBar";

export const Header = ({}) => {
  const [app] = useState([]);
  const [Views] = useState([]);
  const [contacts] = useState([]);
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full h-fit ">
      <div className="relative">
        <div
          className={` bg-gray-100 z-10 h-full w-screen fixed md:absolute md:z-0 md:h-fit px-[15px] duration-150 ${
            open ? "invisible" : "visible"
          }
          }  duration-300`}
        >
          <SideBar className="z-10" />
        </div>
        <div
          className={`2xl:hidden absolute right-6 top-5 z-10 md:hidden duration-150  ${
            !open && "duration-150"
          }`}
          onClick={() => setOpen(!open)}
        >
          <div>{open ? <Menuicon /> : <MenuClose />}</div>
        </div>
      </div>

      <div className="p-6 md:flex  items-baseline justify-evenly md:mx-[168px] ">
        <Link key={app.id} href={`/`}>
          <div>
            <Metabloglogo />
          </div>
        </Link>

        <div className="md:flex gap-12 hidden text-[16px] text-gray-600 ">
          <Link key={app.id} href={`/`}>
            <button>Home </button>
          </Link>
          <Link key={Views} href={`/blogs`}>
            <button>Blog</button>
          </Link>
          <Link key={contacts.id} href={`/contact/${contacts.id}`}>
            <button>Contact</button>
          </Link>
        </div>
        <div className="md:flex hidden ">
          <Search />
        </div>
      </div>
    </div>
  );
};
