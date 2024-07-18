import { Searchbtn } from "./Searchbtn";

export const Search = ({}) => {
  return (
    <form class="w-26 ">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-700 sr-only dark:text-white"
      ></label>
      <div class="relative flex">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </div>
        <div className="w-fit h-fit flex ">
          <input
            type="search"
            id="default-search"
            className="flex px-2 py-1 text-sm text-gray-400 bg-gray-50 overflow-hidden"
            placeholder="Search..."
            required
          />

          <button
            type="submit"
            className="w-[20px] h-[32px] bg-gray-50 px-2 py-2 overflow-hidden "
          >
            <Searchbtn />
          </button>
        </div>
      </div>
    </form>
  );
};
