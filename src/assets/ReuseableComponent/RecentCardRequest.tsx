import CustomPieChart from "../Components/PieChart";


export default function RecentCardRequest() {
  return (
    <>
             <div className="w-full">

                            <div className="bg-[#FFFFFF] border-[#E2E2E2] border w-full h-[290px] rounded-[12px] max-sm:h-auto"> 
                  <h2 className="text-[#121212] ml-3 font-bold text-[20px] pt-2.5">Recent Card Requests</h2>


                  <div className="overflow-x-auto p-2.5">
            <table className="w-full border-collapse border-l-0 border-r-0  border-t border-b border-gray-300">
  <thead className="bg-[#F1F7FF] ">
    <tr className=" text-[#475467] text-center">
      <th className="border-l border-r-0 border-t border-b border-gray-300  h-10 font-medium text-sm">Branch</th>
      <th className="border-l-0 border-r-0 border-t border-b border-gray-300 px-4 py-2 font-medium text-sm">Card Type</th>
      <th className="border-l-0 border-r-0 border-t border-b border-gray-300 px-4 py-2 font-medium text-sm">Quantity</th>
      <th className="border-l-0 border-r-0 border-t border-b border-gray-300 px-4 py-2 font-medium text-sm">Status</th>
      <th className="border-l-0 border-r border-t border-b border-gray-300 px-4 py-2 font-medium text-sm">Action </th>
    </tr>
  </thead>
  <tbody>
   
      
      <tr className="bg-[#FFFFFF] text-[#475467] h-10 text-center font-light text-[14px] text-sm"  >
      <td className="border-t border-b border-gray-300 px-4 py-2">Corporate</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">Instant</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">0</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">
      <span className="bg-[#ECFDF3] text-[10px] border border-[#ABEFC6] rounded-[16px] w-[44px] h-[22px] text-[#067647] px-[8px] py-[2px]">
        Ready
        </span>
      </td>
      <td className="border-t border-b border-gray-300 px-4 py-2">View</td>
    </tr>
    <tr className="bg-[#FFFFFF] text-[#475467] h-10 text-center font-light text-[14px] text-sm"  >
      <td className="border-t border-b border-gray-300 px-4 py-2">Corporate</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">Instant</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">0</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">
      <span className="bg-[#FFFAEB] text-[10px] border border-[#FEDF89] rounded-[16px] w-[44px] h-[22px] text-[#B54708] px-[8px] py-[2px]">
      In Progress
        </span>
      </td>
      <td className="border-t border-b border-gray-300 px-4 py-2 text-[#014DAF] font-bold">View</td>
    </tr>
    <tr className="bg-[#FFFFFF] text-[#475467] h-10 text-center font-light text-[14px] text-sm"  >
      <td className="border-t border-b border-gray-300 px-4 py-2">Corporate</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">Instant</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">0</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">
      <span className="bg-[#FFFAEB] text-[10px] border border-[#FEDF89] rounded-[16px] w-[44px] h-[22px] text-[#B54708] px-[8px] py-[2px]">
      In Progress
        </span>
      </td>
      <td className="border-t border-b border-gray-300 px-4 py-2 text-[#014DAF] font-bold">View</td>
    </tr>
    <tr className="bg-[#FFFFFF] text-[#475467] h-10 text-center font-light text-[14px] text-sm"  >
      <td className="border-t border-b border-gray-300 px-4 py-2">Corporate</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">Instant</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">0</td>
      <td className="border-t border-b border-gray-300 px-4 py-2">
      <span className="bg-[#FFFAEB] text-[10px] border border-[#FEDF89] rounded-[16px] w-[44px] h-[22px] text-[#B54708] px-[8px] py-[2px]">
      In Progress
        </span>
      </td>
      <td className="border-t border-b border-gray-300 px-4 py-2 text-[#014DAF] font-bold">View</td>
    </tr>
  
    
 
  </tbody>
</table>
    
    </div>



                                </div>




                                <div className="bg-[#FFFFFF] border-[#E2E2E2] border w-full h-[17.5rem] rounded-[12px] pb-4 mt-4 max-sm:mt-10">
                                <h2 className="text-[#121212] ml-3 font-bold text-[20px] pt-2.5">Card Status Distribution</h2>   
                                                <CustomPieChart />

                                </div>   
                  
                  </div>



    </>
  )
}
