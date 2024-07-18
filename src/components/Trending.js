import { TrendingCards } from "./TrendingCards";

export const Trending = ({ articles }) => {
  return (
    <div className=" relative bottom-20 w-fit  mx-5 md:m-auto h-md:h-80 ">
      <p className=" text-gray-800 text-[24px] font-bold my-4 ">Trending</p>
      <div className="overflow-scroll md:overflow-scroll md:w-[1200px] w-screen h-screen md:h-fit ">
        <div className="flex flex-row gap-3 w-fit  ">
          <>
            {articles.slice(0, 30).map((item) => (
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
