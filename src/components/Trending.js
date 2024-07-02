import { TrendingCards } from "./TrendingCards";

export const Trending = ({ articles }) => {
  return (
    <div className=" relative bottom-20 w-fit h-fit mx-5 ">
      <p className=" text-gray-800 text-base font-bold ">Trending</p>
      <div className="overflow-scroll w-screen">
        <div className="flex flex-row gap-3 w-fit mt-4">
          <>
            {articles.slice(0, 4).map((item) => (
              <TrendingCards image={item.cover_image} title={item.title} tag={item.tags} />
            ))}
          </>
          {/* <div className="w-72 h-80 relative">
            <img src="/trend2.png" className="w-full h-full rounded-xl" />
            <div className="  absolute top-[164px] left-8 ">
              <p className="bg-[#4B6BFB] rounded-md w-fit h-fit py-1 px-2.5 text-base text-white">
                Technology
              </p>
              <p className="text-white mt-4">
                The Impact of Technology <br /> on the Workplace: How <br />{" "}
                Technology is Changing
              </p>
            </div>
          </div>
          <div className="w-72 h-80 relative ">
            <img src="/trend3.jpg" className="w-full h-full rounded-xl" />
            <div className="  absolute top-[164px] left-8 ">
              <p className="bg-[#4B6BFB] rounded-md w-fit h-fit py-1 px-2.5 text-base text-white">
                Technology
              </p>
              <p className="text-white mt-4">
                The Impact of Technology <br /> on the Workplace: How <br />{" "}
                Technology is Changing
              </p>
            </div>
          </div>
          <div className="w-72 h-80 relative">
            <img src="/trend4.jpg" className="w-full h-full rounded-xl" />
            <div className="  absolute top-[164px] left-8 ">
              <p className="bg-[#4B6BFB] rounded-md w-fit h-fit py-1 px-2.5 text-base text-white">
                Technology
              </p>
              <p className="text-white mt-4">
                The Impact of Technology <br /> on the Workplace: How <br />{" "}
                Technology is Changing
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
