import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-4 text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">The spark</div>
      <div className="text-[9.5vw] uppercase leading-[8vw]  flex items-center justify-center">Who <div className="h-[8vw] w-[16vw] -mt-5 rounded-full overflow-hidden"><Video/></div> </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">generates</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">there</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">creativity</div>
    </div>
  );
};

export default HomeHeroText;
