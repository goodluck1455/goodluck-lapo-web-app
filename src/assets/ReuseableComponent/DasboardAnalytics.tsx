import { GoArrowUpRight } from "react-icons/go";

export default function DasboardAnalytics() {
  return (
    <>
        <div className="dashboard__analytics h-[110px] w-full
                  bg-[#FFFFFF] border-[#E2E2E2] rounded-[10px] border">

                    <div className="mt-2.5 ml-2.5">
                      <img src="/Images/icons/dashboardActiveCard.png" alt="" />
                      <h2 className="mt-2 text-[rgba(0, 0, 0, 0.560784)]"> Total Active Cards</h2>
                    </div>

                    <div className="ml-2.5 flex justify-between mt-2 items-center max-sm:ml-1.5 max-sm:gap-1">
                      <div>
                        <h1 className="text-[#121212] text-[24px]  font-bold">26,478</h1>
                      </div>
                      <div className="flex gap-2.5 max-xl:gap-1 max-sm:gap-1.5">

                        <div className="bg-[#EFFAF6] w-[56px] max-xl:w-[50px] h-[20px] rounded-[4px] flex">
                          <div className="flex gap-1 max-xl:gap-0 items-center p-2 max-xl:p-0 justify-center ">
                          <span>
                              <GoArrowUpRight className="text-[#29A174]" />
                            </span>
                            <span className="text-[#29A174] ">
                             <p className=" font-[500] ">+9%</p> 
                            </span>
                          </div>   
                        </div>

                        <div className="mr-2.5 ml-2 max-xl:ml-[0.2px]">
                            <h2 className="text-[rgba(0, 0, 0, 0.560784)] text-[12px] max-xl:text-[9px]">this month</h2>
                          </div>

                      </div>

                    </div>

                  </div>
    </>
  )
}
