import React from "react";
import HeroSec from "../Components/Ranking/HeroSec";
import Tabs from "../Components/Ranking/Tabs";
import animakidAvatar from "../Images/TopCreators/animakidAvatar.png";
import BlueWhaleAsset from "../Images/TopCreators/BlueWhaleAsset.png";
import DigiLabAvatar from "../Images/TopCreators/DigiLabAvatar.png";
import DotguAvatar from "../Images/TopCreators/DotguAvatar.png";
import GhiblierAvatar from "../Images/TopCreators/GhiblierAvatar.png";
import GravityOneAvatar from "../Images/TopCreators/GravityOneAvatar.png";
import JuanieAvatar from "../Images/TopCreators/JuanieAvatar.png";
import KeepitrealAvatar from "../Images/TopCreators/KeepitrealAvatar.png";
import mrFoxAvatar from "../Images/TopCreators/mrFoxAvatar.png";
import roboticaAvatar from "../Images/TopCreators/roboticaAvatar.png";
import RustyRobotAvatar from "../Images/TopCreators/RustyRobotAvatar.png";
import RankingBars from "../Components/Ranking/RankingBars";

const Ranking = () => {
  const RankingCards = [
    {
      id: 1,
      ArtistImage: animakidAvatar,
      name: "Livia Rosser",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 2,
      ArtistImage: BlueWhaleAsset,
      name: "Ruben Carder",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 3,
      ArtistImage: DigiLabAvatar,
      name: "Alfredo Septimus",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 4,
      ArtistImage: DotguAvatar,
      name: "Davis Franci",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 5,
      ArtistImage: GhiblierAvatar,
      name: "Livia Rosser",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 6,
      ArtistImage: GravityOneAvatar,
      name: "Kianna Donin",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 7,
      ArtistImage: JuanieAvatar,
      name: "Phillip Lipshutz",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 8,
      ArtistImage: KeepitrealAvatar,
      name: "Maria Rosser",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 9,
      ArtistImage: mrFoxAvatar,
      name: "Kianna Stanton",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 10,
      ArtistImage: roboticaAvatar,
      name: "Angel Lubin",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 11,
      ArtistImage: RustyRobotAvatar,
      name: "Allison Torff",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 12,
      ArtistImage: KeepitrealAvatar,
      name: "Davis Workman",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 13,
      ArtistImage: BlueWhaleAsset,
      name: "Lindsey Lipshutz",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 14,
      ArtistImage: mrFoxAvatar,
      name: "Randy Carder",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 15,
      ArtistImage: KeepitrealAvatar,
      name: "Lydia Culhane",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 16,
      ArtistImage: KeepitrealAvatar,
      name: "Rayna Bator",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 17,
      ArtistImage: JuanieAvatar,
      name: "Jocelyn Westervelt",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 18,
      ArtistImage: roboticaAvatar,
      name: "Marilyn Torff",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 19,
      ArtistImage: RustyRobotAvatar,
      name: "Terry Dorwart",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
    {
      id: 20,
      ArtistImage: KeepitrealAvatar,
      name: "Jocelyn Westervelt",
      change: "+1.41%",
      nftSold: 602,
      volume: "12.4 ETH",
    },
  ];

  return (
    <>
      <HeroSec />
      <Tabs />
      <RankingBars RankingCards={RankingCards} />
    </>
  );
};

export default Ranking;
