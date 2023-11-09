import React from "react";

import { artistBanner, artistAvatar } from "../../Images/ArtistPage/index.js";

const HeroBannerImage = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-[320px] flex flex-col items-center "
        style={{ backgroundImage: `URL(${artistBanner})` }}
      ></div>

      <div className="bg-[#3B3B3B] relative">
        <div className="container flex justify-center md:justify-start mx-auto ">
          <img
            src={artistAvatar}
            alt="artistAvatar"
            className="absolute top-[-70px]"
          />
        </div>
      </div>
    </>
  );
};

export default HeroBannerImage;
