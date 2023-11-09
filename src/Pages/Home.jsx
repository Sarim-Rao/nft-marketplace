import React from "react";
import HeroSec from "../Components/HomePage/HeroSec";
import TrendingCollection from "../Components/HomePage/TrendingCollection";
import TopCreators from "../Components/HomePage/TopCreators";
import Categories from "../Components/HomePage/Categories.jsx";
import NftCards from "../Components/HomePage/NftCards.jsx";
import BannerImage from "../Components/HomePage/BannerImage";
import Features from "../Components/HomePage/Features.jsx";
import Subscribe from "../Components/HomePage/Subscribe.jsx";

import {
  KeepitrealAvatar,
  animakidAvatar,
  BlueWhaleAsset,
  DigiLabAvatar,
  DotguAvatar,
  GhiblierAvatar,
  GravityOneAvatar,
  JuanieAvatar,
  mrFoxAvatar,
  roboticaAvatar,
  RustyRobotAvatar,
  ShroomieAvatar} from "../Images/TopCreators/index.js"

  import {
    Category_Art,
    Category_Collectibles,
    Category_Music,
    Category_Photography,
    Category_Sport,
    Category_Utility,
    Category_Video,
    Category_VirtualWords} from "../Images/Browse_Cetagories/index.js"



const Home = () => {
  const TopCreatorsCards = [
    {
      id: 1,
      userImg: KeepitrealAvatar,
      name: "Keepitreal",
    },
    {
      id: 2,
      userImg: DigiLabAvatar,
      name: "DigiLab",
    },
    {
      id: 3,
      userImg: GravityOneAvatar,
      name: "GravityOne",
    },
    {
      id: 4,
      userImg: JuanieAvatar,
      name: "Juanie",
    },
    {
      id: 5,
      userImg: BlueWhaleAsset,
      name: "BlueWhale",
    },
    {
      id: 6,
      userImg: mrFoxAvatar,
      name: "mr-Fox",
    },
    {
      id: 7,
      userImg: ShroomieAvatar,
      name: "Shroomie",
    },
    {
      id: 8,
      userImg: roboticaAvatar,
      name: "robotica",
    },
    {
      id: 9,
      userImg: RustyRobotAvatar,
      name: "RustyRobot",
    },
    {
      id: 10,
      userImg: animakidAvatar,
      name: "animakid",
    },
    {
      id: 11,
      userImg: DotguAvatar,
      name: "Dotgu",
    },
    {
      id: 12,
      userImg: GhiblierAvatar,
      name: "Ghiblier",
    },
  ];


// BrowseCategories Data
  const CategoriesCards = [
    {
      id: 1,
      Img: Category_Art,
      name: "Art",
    },
    {
      id: 2,
      Img: Category_Collectibles,
      name: "Collectibles",
    },
    {
      id: 3,
      Img: Category_Music,
      name: "Music",
    },
    {
      id: 4,
      Img: Category_Photography,
      name: "Photography",
    },
    {
      id: 5,
      Img: Category_Video,
      name: "Art",
    },
    {
      id: 6,
      Img: Category_Utility,
      name: "Collectibles",
    },
    {
      id: 7,
      Img: Category_Sport,
      name: "Music",
    },
    {
      id: 8,
      Img: Category_VirtualWords,
      name: "Photography",
    },
  ];
  

  return (
    <>
      <HeroSec />
      <TrendingCollection />
      <TopCreators heading={true} TopCreatorsCards={TopCreatorsCards} />
      
      <Categories
        heading={true}
        CategoriesCards={CategoriesCards}
      />
     
      <NftCards heading={true} />
      <BannerImage />
      <Features />
      <Subscribe />
    </>
  );
};

export default Home;
