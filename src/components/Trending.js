import { TrendingCards } from "./TrendingCards";

export const Trending = ({ articles }) => {
  return (
    <div className=" relative bottom-20 w-fit h-fit mx-5 ">
      <p className=" text-gray-800 text-base font-bold ">Trending</p>
      <div className="overflow-scroll w-screen ">
        <div className="flex flex-row gap-3 w-fit mt-4">
          <>
            {articles.slice(0, 4).map((item) => (
              <TrendingCards
                image={item.cover_image}
                title={item.title}
                tag={item.tags}
                key={item.cover_image}
              />
            ))}
          </>
        </div>
      </div>
    </div>
  );
};
