import { Menuicon } from "../assets/icon/Menuicon";
import { Metabloglogo } from "../assets/icon/Metabloglogo";
import { Search } from "../assets/icon/Search";

export const Header = ({}) => {
  return (
    <div className="w-full h-full">
      <div className="p-6 md:flex  items-baseline justify-evenly md:mx-[148px] ">
        <div>
          <Metabloglogo />
        </div>

        <div className="md:flex gap-12 hidden ">
          <button>Home </button>
          <button>Blog</button>
          <button>Contact</button>
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
