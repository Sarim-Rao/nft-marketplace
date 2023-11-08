import React from "react";
import HeroSec from "../Components/HomePage/HeroSec";
import TrendingCollection from "../Components/HomePage/TrendingCollection";
import TopCreators from "../Components/HomePage/TopCreators";
import KeepitrealAvatar from "../Images/TopCreators/KeepitrealAvatar.png";
import animakidAvatar from "../Images/TopCreators/animakidAvatar.png";
import BlueWhaleAsset from "../Images/TopCreators/BlueWhaleAsset.png";
import DigiLabAvatar from "../Images/TopCreators/DigiLabAvatar.png";
import DotguAvatar from "../Images/TopCreators/DotguAvatar.png";
import GhiblierAvatar from "../Images/TopCreators/GhiblierAvatar.png";
import GravityOneAvatar from "../Images/TopCreators/GravityOneAvatar.png";
import JuanieAvatar from "../Images/TopCreators/JuanieAvatar.png";
import mrFoxAvatar from "../Images/TopCreators/mrFoxAvatar.png";
import roboticaAvatar from "../Images/TopCreators/roboticaAvatar.png";
import RustyRobotAvatar from "../Images/TopCreators/RustyRobotAvatar.png";
import ShroomieAvatar from "../Images/TopCreators/ShroomieAvatar.png";
import BrowseCategories from "../Components/HomePage/BrowseCategories";
import Category_Art from "../Images/Browse Cetagories/Category_Art.png";
import Category_Collectibles from "../Images/Browse Cetagories/Category_Collectibles.png";
import Category_Music from "../Images/Browse Cetagories/Category_Music.png";
import Category_Photography from "../Images/Browse Cetagories/Category_Photography.png";
import Category_Sport from "../Images/Browse Cetagories/Category_Sport.png";
import Category_Utility from "../Images/Browse Cetagories/Category_Utility.png";
import Category_Video from "../Images/Browse Cetagories/Category_Video.png";
import Category_VirtualWords from "../Images/Browse Cetagories/Category_VirtualWorlds.png";
import DiscoverMoreNFTs from "../Components/HomePage/DiscoverMoreNFTs";
import BannerImage from "../Components/HomePage/BannerImage";
import HowItWorks from "../Components/HomePage/HowItWorks";
import WeeklyDigest from "../Components/HomePage/WeeklyDigest";

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
  const BrowseCategoriesCars = [
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
      
      <BrowseCategories
        heading={true}
        BrowseCategoriesCars={BrowseCategoriesCars}
      />
     
      <DiscoverMoreNFTs heading={true} />
      <BannerImage />
      <HowItWorks />
      <WeeklyDigest />
    </>
  );
};

export default Home;
