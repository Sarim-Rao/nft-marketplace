import React, { useState } from "react";
import HeroSec from "../Components/Ranking/HeroSec";
import Tabs from "../Components/Ranking/Tabs";
import TableItems from "../Components/Ranking/TableItems.jsx";

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
    RustyRobotAvatar
} from "../Images/TopCreators/index.js"


const Ranking = () => {

  const [tab,setTab] = useState(1)

  const TableData = [
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
      <Tabs tab={tab} setTab={setTab} />
      <TableItems TableData={TableData} />
    </>
  );
};

export default Ranking;
