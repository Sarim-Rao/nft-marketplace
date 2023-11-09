import React from 'react'
import nftBanner from "../../Images/NftImages/nftBanner.png"

const BannerImage = () => {
  return (
    <>
      <div
        className="!bg-cover !bg-center !w-full h-[320px] md:h-[420px] lg:h-[560px] "
        style={{ backgroundImage: `URL(${nftBanner})` }}
      ></div>
      
    </>
  )
}

export default BannerImage
