// import { useState } from "react";



import { useComplaintContext } from "./ComplaintContext"



const itemsPerPage = 4;

export default function Table() {


  // const [selectedData, setSelectedData] = useState(PendingTabledata);
  // const [activeTab, setActiveTab] = useState("pending");

  // const handleDataSwitch = (type: "pending" | "resolved") => {
  //   setSelectedData(type === "pending" ? PendingTabledata : ResolveTabledata);
  //   setActiveTab(type);
  // };

  const { selectedData, currentPage, setCurrentPage } = useComplaintContext()




    // const [currentPage, setCurrentPage] = useState(1)
  
    const totalPages = Math.ceil(selectedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = selectedData.slice(startIndex, startIndex + itemsPerPage);








  return (
    <>
 {/* pending and resolved tab BEGINS here */}








     {/* pending and resolved tab ENDS here */}







    <div className="table___mainContainer">
      <div className="table___headerSearchBar w-full border border-gray-300">

        <section className="flex justify-between items-center table___searchBar___container">
        <div className="flex items-center gap-1.5 table___searchBar cursor-pointer">
          <span className="searcgBAR__ICON">
          <img src="/Images/icons/search-sm.png" alt="" />
          </span>
          <span>
          <input className="bg-[#FFFFFF] input__searchBar" type="text"  placeholder="Search complaint"/>
          </span>
        </div>

        <div className="flex gap-2 ">
          <div className="table___dateSearch flex gap-1 items-center cursor-pointer">
          <span>
            <img src="/Images/icons/dateSearch.png" alt="" />
          </span>
          <span>
            <h2>Date</h2>
          </span>
          </div>

          <div className="table___dateSearch flex gap-1 items-center cursor-pointer">
          <span>
            <img src="/Images/icons/filterSearch.png" alt="" />
          </span>
          <span>
            <h2>Filter</h2>
          </span>
          </div>
        
        </div>

        </section>
  
       

      </div>
      
    <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg border border-gray-300">
  <thead className="bg-[#F9FAFB] rounded-t-lg">
    <tr className=" text-[#475467] text-center">
      <th className="border border-gray-300 px-4 py-2 h-10 font-medium text-sm">Account Number</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-sm">Customer Name</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-sm">Submission Date</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-sm">Category</th>
    </tr>
  </thead>
  <tbody className="rounded-b-lg ">
    {currentData.map((data)=>{
        return(
      <tr className="bg-[#FFFFFF] text-[#475467] h-10 text-center font-light text-[14px] text-sm" key={data.id} >
      <td className="border border-gray-300 px-4 py-2">{data.AccountNumber}</td>
      <td className="border border-gray-300 px-4 py-2">{data.CustomerName}</td>
      <td className="border border-gray-300 px-4 py-2">{data.SubmissionDate}</td>
      <td className="border border-gray-300 px-4 py-2">{data.Category}</td>
    </tr>
        )

    })}
    
 
  </tbody>
</table>
    
    </div>

    <div className="table___headerSearchBarB w-full border border-gray-300">
    <section className="flex justify-between items-center table___searchBar___container">
        <div className="flex items-center gap-1.5 table___searchBar cursor-pointer">
         
          <span>
           <h2>Page {currentPage} of 20 </h2>
          </span>
        </div>

        <div className="flex gap-2 ">
          <div className="table___dateSearch flex gap-1 items-center justify-center cursor-pointer">
          <span>
            <button type="button" className={`cursor-pointer ${currentPage === 1 ? " text-[#a6a6aa55]" : ""}`}
            onClick={() => setCurrentPage((prev:number) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Previous</button>
          </span>
          </div>
          <div className="table___dateSearch flex gap-1 items-center justify-center cursor-pointer">
          <span>
            <button type="button" className="cursor-pointer"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >Next</button>
          </span>
          </div>
        
        </div>

        </section>
          </div>



    </div>
    </>
  )
}
