import { Searchbtn } from "./Searchbtn";

export const Search = ({}) => {
  return (
    <form class="w-30 ">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
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
        <input
          type="search"
          id="default-search"
          class="flex w-fit  px-3 py-1 text-sm text-gray-400  border-gray-300 border-none bg-gray-50 focus:ring-gray-400 focus:border-gray-400 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gra-400 dark:focus:ring-gray-400 dark:focus:border-gray-400"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          class="text-gray-400 absolute right-0 end-2.5 top-2 bottom-2.5 hover:bg-gray-600 focus:ring-2 focus:outline-none focus:ring-gray-400 font-medium rounded-xl text-sm mx-2 wid dark:hover:bg-gray-400 dark:focus:ring-gray-400"
        >
          <Searchbtn />
        </button>
      </div>
    </form>
  );
};
