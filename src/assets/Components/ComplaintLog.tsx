import "../CSS-FOLDER/ComplaintLog.css"
import "../CSS-FOLDER/Dasboard.css"
import { useComplaintContext } from "./ComplaintContext";
import Table from "./Table"

import { useState } from "react";







export default function ComplaintLog() {
  // const [selectedData, setSelectedData] = useState<TableRow[]>(PendingTabledata);
  // const [activeTab, setActiveTab] = useState("pending");
  // const [currentPage, setCurrentPage] = useState(1)
  const [formOpen, setFormOpen]= useState(false);

  // const handleDataSwitch = (type: "pending" | "resolved") => {
  //   setSelectedData(type === "pending" ? PendingTabledata : ResolveTabledata);
  //   setActiveTab(type);
  //   setCurrentPage(1);
  // };

  const {  activeTab,   handleDataSwitch } = useComplaintContext();

  return (
    <div className="w-screen complaintRe____header-body h-screen   scroll-smooth  scrollbar-hide ">


      <section className="bg-white">
        <div className="complaint___container ">
          
          <section className="flex justify-between items-center">
          
          <div className="flex gap-2.5 items-center complaint___infoLogo">
            <div>
            <img src="/Images/icons/infoComplaintLog.png" alt="" /> 
            </div>
           <div>
            <h2>  Complaint: Log</h2>
           </div>
          
          </div>

          <div className="flex gap-7 items-center complaint____bellCont">
            <span>
            <img src="/Images/icons/infoBell.png" alt="" />
            </span>
            <span>
            <img src="/Images/icons/inforContact.png" alt="" />
            </span>
           
          </div>

          </section>
                  
        </div>

        </section>

        <section className="complaint___container">
        <div className="complaint___logTitle">
          <h1 className="font-bold ">Complaints: Log</h1>
          <p className="text-[#475467] text-[14px]">View details of logged complaints and log new ones here.</p>
        </div>

            <section className="flex justify-between">
              <div className="flex"> 
            <div className={`complaint__pending ${activeTab === "pending" ? "complaint__pendingActive" : ""}`} 
            onClick={() => handleDataSwitch("pending")}>
              <button type="button" className="cursor-pointer">Pending</button>
              </div>
             <div className={`complaint__pendingB ${activeTab === "resolved" ? "complaint__pendingActive" : ""}`} 
             onClick={() => handleDataSwitch("resolved")}>
              <button type="button" className="cursor-pointer">Resolve</button>
              </div>
              </div>


              <div onClick={() => setFormOpen(true)} className="bg-[#014DAF] complaint__LogComplain flex gap-2.5 items-center text-white cursor-pointer">
                <span>
                  <img src="/Images/icons/iconLog.png" alt=""/>
                </span>
                <span>
              <h2>LogComplaint</h2>
                </span>
              </div>
            </section>

            <section className="complaint__tableData">
              <Table />
       
             
            </section>
           

           

        </section>
        {formOpen && (
        <div  className="fixed inset-0 flex justify-center bg-[#64646466]/50 backdrop-blur-md scroll-auto overflow-y-scroll">
        <div className="">

         <div className="complaint__Form___Container  w-[470px] mt-[0.2rem] pb-2 ">
           
            <div className="flex gap-11 p-3.5">

          <div className="flex complian___form-details p-2.5 gap-1.5">
            <span>
              <img src="/Images/icons/FormComplain.png" alt="" />
            </span>
            <span>
              <p className="text-[18px] font-bold text-[#101828]">Log Complaint</p>
              <p className="text-[#475467] text-[14px]">Select category and fill in details</p>
            </span>
          </div>

          <div onClick={() => setFormOpen(false)} className="cursor-pointer">
            <img src="/Images/icons/Button close X.png" alt="" />
          </div>

            </div>

              <div className="ml-6">
              <form action="">
              <label htmlFor="" className="form__label text-[#344054]">Category</label> <br />
              <select name="" id=""  className="mt-1  mb-3 complaine__FormInput text-[#344054] pl-3">
                <option value="">Select category from dropdown</option>
                <option value=""></option>
              </select>

              <label htmlFor="" className="text-[#344054">Account Number*</label> <br />
              <input type="text" className="mt-1 complaine__FormInput pl-4 mb-3" placeholder="0123456789"/>

              <label htmlFor="" className="text-[#344054">Customer Name*</label> <br />
              <input type="text" className="mt-1 complaine__FormInput pl-4 mb-3 bg-[#F5F5F7] font-bold" placeholder="Nazeer Ajibola"/>

              <label htmlFor="text" className='text-[#344054]'>Complaint Details*</label> <br />
                    <textarea name="message" placeholder='Describe complaint....' className='resize-none complaine__FormInputTextArea pl-3 pt-3'>
                    </textarea>

                    <label htmlFor="" className="text-[#344054">Upload File (optional)</label> <br />
                    <div className="File__upload flex flex-col justify-center items-center text-center cursor-pointer">
                      <span>
                        <img src="/Images/icons/downloadIcon.png" alt="" />
                      </span>
                      <span>
                      <p className="text-[#475467]"><a href="" className="text-[#014DAF] font-bold">Click to upload</a> or drag and drop</p>
                      <p className="text-[#475467]">PDF, JPG (max. 10mb)</p>
                      </span>
                      
                      </div>  

                      <button type="button" className="Form__btn text-white font-bold mt-1">Proceed</button>   
        
            </form>
              </div>
           
             


         </div>


              
              </div>
            </div>)}
     
    </div>
  )
}




