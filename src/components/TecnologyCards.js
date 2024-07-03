export const TechnologyCards = (props) => {
  return (
    <div className="px-3 ">
      <div img="relative ">
        <img
          src={props.image}
          className=" w-[390px] h-[600px] relative rounded-xl "
        />
      </div>

      <div className="bg-gray-100  z-10 absolute bottom-0 mx-6 rounded-md ">
        <div className="p-10 ">
          <div className="bg-[#4B6BFB] w-fit rounded-md mb-4 ">
            {props.tag

              .slice(0, 5)
              .split(",")
              .map((item) => (
                <p className="py-1 px-2.5 text-white scroll-m-28 ">
                  {item}
                </p>
              ))}
          </div>
          <div className="text-4xl font-semibold">
            <p>{props.title.slice()}</p>
          </div>
          <div className="text-base mt-6 text-gray-600">
            {props.readable_publish_date}
          </div>
        </div>
      </div>
    </div>
  );
};
