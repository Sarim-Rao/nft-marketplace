import React from 'react'
import nftBanner from "../../Images/NftImages/nftBanner.png"

const Nft = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-[320px] md:h-[420px] lg:h-[560px] lex flex-col items-center"
        style={{ backgroundImage: `URL(${nftBanner})` }}
      ></div>
      
    </>
  )
}

export default Nft
