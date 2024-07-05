export const TrendingCards = (props) => {
  return (
    <div className="w-72  relative md:h-[320px] h-[320px]  ">
      <img
        src={props.image}
        className="w-72 h-[320px] rounded-xl object-cover m   "
      />
      <div className="  absolute top-[164px] left-8 ">
        <div className="flex flex-wrap gap-2">
          {props.tag.split(",").map((item) => (
            <p
              key={item}
              className="bg-[#4B6BFB] rounded-md w-fit h-fit py-1 px-2.5 text-base text-white"
            >
              {item}
            </p>
          ))}
        </div>

        <p className="text-white mt-4">
          {/* The Impact of Technology <br /> on the Workplace: How <br />{" "}
          Technology is Changing */}
          {props.title}
        </p>
      </div>
    </div>
  );
};
