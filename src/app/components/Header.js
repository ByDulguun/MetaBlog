import { Menuicon } from "../asets/icon/Menuicon";
import { Metabloglogo } from "../asets/icon/Metabloglogo";
import { Search } from "../asets/icon/Search";

export const Header = ({}) => {
  return (
    <div className="w-fit h-fit border-fuchsia-950 flex">
      <div className="p-5 flex  justify-between ">
        <div>
          <Metabloglogo />
          <div>
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
            <div>
              <Search />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Menuicon />
        </div>
      </div>
    </div>
  );
};
