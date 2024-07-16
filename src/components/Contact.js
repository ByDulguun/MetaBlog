export const Contact = () => {
  return (
    <div className="w-full h-fit my-[100px] ">
      <div className="w-full h-fit grid justify-center gap-8">
        <h1 className="text-[36px] font-semibold">Contact Us</h1>
        <p className="w-[600px] text-[16px] text-gray-500 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="flex gap-[50px]">
          <div className="border rounded-md px-4 py-4 h-fit gap-2 grid flex-1">
            <h1 className="text-[24px] font-semibold">Address</h1>
            <p className="w-[200px] text-[#696A75]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="border rounded-md px-4 py-4 h-fit gap-2 grid flex-1">
            <h1 className="text-[24px] font-semibold">Contact</h1>
            <p className="w-[200px] text-[#696A75]">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>
        <div className="bg-[#F6F6F7] w-fit h-fit py-[30px] grid gap-8 pl-[35px] pr-[130px]">
          <p className="text-[18px] font-semibold">Leave a Message</p>
          <div className="flex gap-2">
            <input
              type="name"
              placeholder="Your Name"
              className="px-[14px] py-[8px] flex-1 border rounded-md"
            />
            <input
              type="email"
              placeholder="email"
              className="px-[12px] py-[8px] flex-1 border rounded-md"
            />
          </div>
          <div className="h-fit grid gap-8">
            <input
              type="subject"
              placeholder="Subject"
              className="px-[12px] py-[8px] border rounded-md"
            />
            <input
              type="message"
              placeholder="Write a message"
              className="w-[480px] h-[130px] border rounded-md"
            />
          </div>
          <button className="w-fit bg-[#4B6BFB] h-fit px-4 py-2 text-white rounded-md">
            <p>Send Message</p>
          </button>
        </div>
      </div>
    </div>
  );
};
