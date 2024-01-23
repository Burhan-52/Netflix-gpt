import { StateProps } from ".";


const VideoTitle = ({ title, overview }: StateProps) => {
  return (
    <div className="w-full h-screen aspect-video pt-[15%] pl-8 md:pl-12 absolute bg-gradient-to-r from-black">
      <div className="font-bold text-2xl md:text-3xl text-white pt-10 md:pt-0 ">{title}</div>
      <div className="hidden md:inline-block mt-5 w-3/12  text-white text-sm">
        {overview}
      </div>
      <div className="flex mt-2 md:mt-5 ">
        <div className="text-black bg-white px-7 py-2 md:py-3 rounded-md cursor-pointer hover:bg-opacity-80 text-sm">
          {" "}
          Play
        </div>
        <div className="hidden md:inline-block text-white bg-gray-500 px-7 py-3 ml-1 rounded-md cursor-pointer text-sm">
          More Info{" "}
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
