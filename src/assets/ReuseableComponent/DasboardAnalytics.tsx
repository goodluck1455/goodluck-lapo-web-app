// import { GoArrowUpRight } from "react-icons/go";
// import React from "react";

interface DasboardAnalyticsProps{
  TypeOfCard: string;
  AnalyticAmount:string;
  MText:string;
  Percentage:string;
  PercentageIcon: React.ReactNode;
  attention:string;
  CSSAttribute:string;
  HideDiv:string;
  ImageLogo:string
}


export default function DasboardAnalytics({TypeOfCard, ImageLogo, AnalyticAmount, Percentage, MText, PercentageIcon, attention, CSSAttribute, HideDiv}:DasboardAnalyticsProps) {
  return (
    <>
        <div className="dashboard__analytics h-[110px] w-full
                  bg-[#FFFFFF] border-[#E2E2E2] rounded-[10px] border">

                    <div className="mt-2.5 ml-2.5">
                      <img src={ImageLogo} alt="" loading="lazy" />
                      <h2 className="mt-2 text-[rgba(0, 0, 0, 0.560784)]"> {TypeOfCard}</h2>
                    </div>

                    <div className="ml-2.5 flex justify-between mt-2 items-center max-sm:ml-1.5 max-sm:gap-1">
                      <div>
                        <h1 className="text-[#121212] text-[24px]  font-bold">{AnalyticAmount}</h1>
                      </div>
                      <div className="flex gap-2.5 max-xl:gap-1 max-sm:gap-1.5">

                        <div className={`bg-[#EFFAF6] w-fit max-xl:w-[50px] ${CSSAttribute} h-[20px] rounded-[4px] flex max-lg:w-fit max-lg:px-2 max-xl:w-fit`}>
                          <div className="flex gap-1 max-xl:gap-0 items-center p-1 max-xl:p-0 justify-center">
                          <span>
                              {/* <GoArrowUpRight className="text-[#29A174]" /> */}
                              {PercentageIcon}
                            </span>
                            <span className="text-[#29A174] ">
                             <p className=" font-[500] ">{Percentage}</p> 
                            </span>
                          </div>   
                        </div>

                        <div className="mr-3 ml-0.1 max-xl:ml-[0.2px]">
                            <h2 className="text-[rgba(0, 0, 0, 0.560784)] text-[12px]  max-lg:text-[1rem]">{MText}</h2>
                          </div>

                      </div>
                      <div className={`pr-4 flex items-center gap-1 ${HideDiv}`}>
                     <span><img src="./Images/icons/attentionLogo.png" alt="" /></span>   <p className="text-[#E78020]">{attention}</p>
                      </div>

                    </div>

                  </div>
    </>
  )
}
