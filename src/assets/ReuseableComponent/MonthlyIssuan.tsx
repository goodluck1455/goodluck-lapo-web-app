import Chart from "../ReuseableComponent/BarChart";
import CustomLineChart from "./CustomLineChart";

export default function MonthlyIssuan() {
  return (
    <>
      
      <div className="w-full">
                        <div className="bg-[#FFFFFF] border-[#E2E2E2] border w-full h-auto rounded-[12px] pb-4">
                    <h2 className="text-[#121212] ml-3 font-bold text-[20px] pt-2.5">Monthly Issuance</h2>
                  
                  <Chart />
                    

                    </div> 

                    <div className="bg-[#FFFFFF] border-[#E2E2E2] border w-[full] h-[auto] rounded-[12px] pb-4 mt-4">
                    <h2 className="text-[#121212] ml-3 font-bold text-[20px] pt-2.5">This Week’s Income</h2>
                      <CustomLineChart />

                    </div>

                  </div>



    </>
  )
}
