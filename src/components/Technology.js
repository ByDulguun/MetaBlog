import { Lefticon } from "@/assets/icon/Lefticon";
import { Righticon } from "@/assets/icon/Righticon";

export const Technology = ({}) => {
  return (
    <div className="w-screen h-screen">
      <div className="px-5 ">
        <img src="/image.jpg" className="relative" />
        <div className="bg-gray-100  z-10 absolute bottom-4 mx-6 rounded-md">
          <div className="p-10 ">
            <div className="bg-[#4B6BFB] w-fit rounded-md mb-4 ">
              <p className="py-1 px-2.5 text-white ">Technology</p>
            </div>
            <div className="text-4xl font-semibold">
              Grid system <br /> for better <br /> Design User <br /> Interface
            </div>
            <div className="text-base mt-6 text-gray-600">August 20, 2022</div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <button className="border rounded-lg px-3 py-2">
            <Lefticon />
          </button>
          <button className="border rounded-lg px-3 py-2">
            <Righticon />
          </button>
        </div>
      </div>
    </div>
  );
};
