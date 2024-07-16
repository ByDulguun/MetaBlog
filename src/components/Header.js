import Link from "next/link";
import { Menuicon } from "../assets/icon/Menuicon";
import { Metabloglogo } from "../assets/icon/Metabloglogo";
import { Search } from "../assets/icon/Search";
import { useState } from "react";

export const Header = ({}) => {
  const [app] = useState([]);
  const [Views] = useState([]);
  const [contacts] = useState([]);
  return (
    <div className="w-full h-fit mx-2">
      <div className="p-6 md:flex  items-baseline justify-evenly md:mx-[168px] ">
        <Link key={app.id} href={`/`}>
          <div>
            <Metabloglogo />
          </div>
        </Link>

        <div className="md:flex gap-12 hidden ">
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
      <div className="2xl:hidden w-fit h-fit absolute right-6 top-5 ">
        <Menuicon />
      </div>
    </div>
  );
};
