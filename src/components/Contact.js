export const Contact = () => {
  return (
    <div className="md:w-full md:h-fit md:my-[100px] mx-4 ">
      <div className="md:w-full md:h-fit md:grid md:justify-center md:gap-8  grid h-fit gap-8">
        <h1 className="text-[36px] font-semibold mx-4">Contact Us</h1>
        <p className="md:w-[600px] text-[16px] text-gray-500 font-normal  w-[300px] mx-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="md:flex md:gap-[50px] h-fit grid gap-[50px]  mx-4">
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
        <div className="bg-[#F6F6F7] md:w-fit md:h-fit md:py-[30px] grid gap-8 md:pl-[35px] md:pr-[130px] mr-4 rounded-lg my-12">
          <p className="text-[18px] font-semibold px-6 py-2">Leave a Message</p>
          <div className="md:flex md:gap-2 h-fit grid gap-2 w-fit  ">
            <input
              type="name"
              placeholder="Your Name"
              className="px-[14px] py-[8px] flex-1 border rounded-md mx-4 w-[320px]"
            />
            <input
              type="email"
              placeholder="email"
              className="px-[12px] py-[8px] flex-1 border rounded-md mx-4 w-[320px]"
            />
          </div>
          <div className="h-fit grid gap-8">
            <input
              type="subject"
              placeholder="Subject"
              className="px-[12px] py-[8px] border rounded-md mx-4 w-[320px]"
            />
            <input
              type="message"
              placeholder="Write a message"
              className="md:w-[480px] h-[130px] border rounded-md mx-4 w-[320px]"
            />
          </div>
          <button className="md:w-fit bg-[#4B6BFB] h-fit px-4 py-2 text-white rounded-md mx-4">
            <p>Send Message</p>
          </button>
        </div>
      </div>
    </div>
  );
};
