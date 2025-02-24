// import React from 'react'
import "../CSS-FOLDER/ComplaintLog.css"
import { useComplaintContext } from "./ComplaintContext"
import Table from "./Table"
import { FaBarsStaggered } from "react-icons/fa6";




export default function ComplaintResolve() {

  const { activeTab,  handleDataSwitch } = useComplaintContext()

  const {navbar, setNavbar} = useComplaintContext();

  const showSideBar = ()=>{

   setNavbar(!navbar)
   // setIsOpen(!isOpen);
}
    return (
        <div className="w-screen complaintRe____header-body h-screen   scroll-smooth  scrollbar-hide ">
        
  
         <section className="bg-white">
          <div className="complaint___container ">
            
            <section className="flex justify-between items-center">
            
            <div className="flex gap-2.5 items-center complaint___infoLogo">
               <div className="hidden max-sm:block max-lg:block" onClick={showSideBar}>
                                       <FaBarsStaggered />
                                      </div>
              <div>
              <img src="/Images/icons/resolveLogo.png" alt="" /> 
              </div>
             <div>
              <h2>  Complaint: Resolve</h2>
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
                    <p className="text-[#475467] text-[14px]">View details of treated complaints and resolve pending ones here.</p>
                  </div>
          
                      <section className="flex justify-between">
                        <div className="flex"> 
                        <div className="flex"> 
                        <div className={`complaint__pending ${activeTab === "pending" ? "complaint__pendingActive" : ""}`} 
                        onClick={() => handleDataSwitch("pending")}>
                          <button type="button" className="cursor-pointer">Pending</button>
                          </div>
                        <div className={`complaint__pendingB ${activeTab === "resolved" ? "complaint__pendingActive" : ""}`} 
                        onClick={() => handleDataSwitch("resolved")}>
                          <button type="button" className="cursor-pointer"> Treated</button>
                          </div>
                          </div>
 
                        </div>
          
          
                        {/* <div  className="bg-[#014DAF] complaint__LogComplain flex gap-2.5 items-center text-white cursor-pointer">
                        
                        </div> */}
                      </section>
          
                      <section className="complaint__tableData">
                        <Table />
                      
                      </section>
                     
          
                     
          
                  </section>
  
  
  
      </div>
    )
  }
  