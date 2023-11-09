import React from "react";

const Categories = ({ CategoriesCards, heading }) => {
  return (
    <>
      {heading && (
        <div className="bg-[#2B2B2B] py-[40px] md:py-[80px]">
          <div className="max-w-[80%] container">
            <p className="font-sans text-[28px] md:text-[38px] font-[600] leading-[39px] text-[#FFFFFF] ">
              Browse Categories
            </p>
          </div>
        </div>
      )}

      <div className="bg-[#2B2B2B]">
        <div className="md:max-w-[80%] container flex flex-wrap justify-center items-center  gap-[20px] w-[100%]">
          {CategoriesCards.map((item) => (
            <div
              className="max-w-[240px] w-[45%] lg:w-[23%]  rounded-[20px] bg-[#3b3b3b] mb-[30px] hover:scale-95 duration-300 cursor-pointer"
              key={item.id}
            >
              <div className="relative">
                <img
                  src={item.Img}
                  alt="Img"
                  className=" w-full full object-cover"
                />
              </div>

              <div className="py-[20px] px-[30px] flex  items-center justify-center">
                <p className="font-sans text-[16px] lg:text-[22px] text-center font-[600] leading-[30px] text-[#FFFFFF]">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
