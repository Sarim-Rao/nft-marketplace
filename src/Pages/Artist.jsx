import React, { useState } from "react";
import HeroBannerImage from "../Components/Artist/HeroBannerImage";
import AnimakidSec from "../Components/Artist/AnimakidSec";
import Tabs from "../Components/Artist/Tabs";
import AnimakidCards from "../Components/Artist/AnimakidCards";

import {
  AnimakidAvatar,
  CryptoCity,
  ColorfulDog,
  SpaceTales,
  CherryBlossomGirl,
  DancingRobots,
  IceCreamApe,
} from "../Images/ArtistPage/index.js";

import {
  AstroFictionPlaceholder,
  DistantGalaxyPlaceholder,
  LifeOnEdenaPlaceholder,
} from "../Images/Discover_More_NFTs/index.js";


const Artist = () => {
  const [tab, setTab] = useState(1);

  const AnimakidCardsSec1 = [
    {
      id: 1,
      Image: DistantGalaxyPlaceholder,
      name: "Distant Galaxy",
      avatar: AnimakidAvatar,
      avatarName: "Animakid",
    },
    {
      id: 2,
      Image: LifeOnEdenaPlaceholder,
      name: "Life On Edena",
      avatar: AnimakidAvatar,
      avatarName: "Animakid",
    },
    {
      id: 3,
      Image: AstroFictionPlaceholder,
      name: "AstroFiction",
      avatar: AnimakidAvatar,
      avatarName: "Animakid",
    },
    {
      id: 4,
      Image: CryptoCity,
      name: "CryptoCity",
      avatar: AnimakidAvatar,
      avatarName: "Animakid",
    },
    {
      id: 5,
      Image: ColorfulDog,
      name: "ColorfulDog 0524 ",
      avatar: AnimakidAvatar,
      avatarName: "Animakid",
    },
    {
      id: 6,
      Image: SpaceTales,
      name: "Space Tales",
      avatar: AnimakidAvatar,
      avatarName: "Animakid",
    },
    {
      id: 7,
      Image: CherryBlossomGirl,
      name: "Cherry Blossom Girl 037",
      avatar: AnimakidAvatar,
      avatarName: "Animakid",
    },
    {
      id: 8,
      Image: DancingRobots,
      name: "Dancing Robots 0987",
      avatar: AnimakidAvatar,
      avatarName: "Animakid",
    },
    {
      id: 9,
      Image: IceCreamApe,
      name: "IceCream Ape ",
      avatar: AnimakidAvatar,
      avatarName: "Animakid",
    },
  ];

  const AnimakidCardsSec2 = [...AnimakidCardsSec1].reverse();
  const AnimakidCardsSec3 = [...AnimakidCardsSec2].reverse();

  return (
    <>
      <HeroBannerImage />
      <AnimakidSec />
      <Tabs tab={tab} setTab={setTab} />
      <div className="bg-[#3b3b3b] mb-[2px] py-[60px]">
        <AnimakidCards
          AnimakidCardsSec={
            tab === 1
              ? AnimakidCardsSec1
              : tab === 2
              ? AnimakidCardsSec2
              : tab === 3
              ? AnimakidCardsSec3
              : ""
          }
        />
      </div>
    </>
  );
};

export default Artist;
