/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export const TechnologyCards = (props) => {
  return (
    <div className="w-full px-3 relative overflow-hidden md:flex md:justify-center ">
      <div className="w-fit h-[600px] rounded-xl object-cover md:mt-12 md:rounded-none md:w-[1200px] relative md:relative ">
        <img src={props.image} className=" w-fit h-[600px] " />
        <div>
          <div className="bg-gray-100 z-10 absolute md:absolute bottom-4 left-4 rounded-md p-10 w-[calc(100%-32px)] md:w-[590px] ">
            <div className="flex flex-wrap gap-2  ">
              {props.tag
                .split(",")
                .slice(0, 3)
                .map((item) => (
                  <p
                    key={item}
                    className="bg-[#4B6BFB] py-1 px-2.5 text-white scroll-m-28 rounded-md"
                  >
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
    </div>
  );
};
