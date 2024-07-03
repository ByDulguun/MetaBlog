import { Menuicon } from "../assets/icon/Menuicon";
import { Metabloglogo } from "../assets/icon/Metabloglogo";
import { Search } from "../assets/icon/Search";

export const Header = ({}) => {
  return (
    <div className="w-screen h-fit">
      <div className="flex justify-between p-6 align-baseline">
        <div>
          <Metabloglogo />
        </div>
        <div className="2xl:hidden w-fit h-fit">
          <Menuicon />
        </div>
      </div>
    </div>
  );
};
