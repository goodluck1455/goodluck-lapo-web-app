// import React from 'react'

// import { PieChart } from "recharts";
// import Chart from "../ReuseableComponent/BarChart";
// import { useState } from "react";
import DasboardAnalytics from "../ReuseableComponent/DasboardAnalytics";
import MonthlyIssuan from "../ReuseableComponent/MonthlyIssuan";
import RecentCardRequest from "../ReuseableComponent/RecentCardRequest";
// import CustomPieChart from "./PieChart";
import { FaBarsStaggered } from "react-icons/fa6";
import { useComplaintContext } from "./ComplaintContext";
import QuickAccess from "../ReuseableComponent/QuickAccess";






export default function Dashboard() {
  // const [navbar, setNavbar] = useState(false);
  const {navbar, setNavbar} = useComplaintContext();

  const formattedDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const showSideBar = ()=>{

    setNavbar(!navbar)
    // setIsOpen(!isOpen);
}


  return (
    <div className="w-screen complaintRe____header-body h-screen   scroll-smooth  scrollbar-hide bg-[#F1F7FF] ">
         

         <section className="bg-white">
        <div className="complaint___container">
          
          <section className="flex justify-between items-center">
          
          <div className="flex gap-2.5 items-center complaint___infoLogo">
            <div className="cursor-pointer hidden max-sm:block max-md:block" onClick={showSideBar}>
             <FaBarsStaggered />
            </div>
            <div className="max-sm:hidden">
            <img src="/Images/icons/dashboard.png" alt="" /> 
            </div>
           <div className="max-sm:hidden">
            <h2> Dashboard </h2>
           </div>
          
          </div>

          <div className="flex gap-7 items-center p-[8px] max-sm:gap-2 max-sm:p-[5px]">
            <span>
            <div className="flex items-center gap-1.5 table___searchBar cursor-pointer">
          <span className="searcgBAR__Dasbord absolute top-4 z-10 w-[1.8rem] ml-3 max-sm:top-3.5"> 
          <img src="/Images/icons/search-sm.png" alt="" className="w-[1rem]" />
          </span>
          <span>
          <input className="bg-[#FFFFFF] Dashboard__input__search outline-none max-sm:pt-1 
          border-[#D0D5DD] border-[0.979916px] rounded-[97.9916px]" type="text"  placeholder="Search"/>
          </span>
        </div>
            </span>

            <span className="">
            <img src="/Images/icons/infoBell.png" alt="" className=""/>
            </span>

            <span>
            <img src="/Images/icons/inforContact.png" alt="" className="" />
            </span>
           
          </div>

          </section>
                  
        </div>

        </section>


        <main className="complaint___container  MediaWidth__A pt-1.5 ">

         <section className="flex justify-between max-sm:flex-col-reverse">  
        <div className="DashBoard___logTitle">
          <h1 className="font-bold ">Hi Nazeer, what would you like to do today?</h1>
          <p className="text-[#475467] text-[14px]">Last login: 26/11/2024  14:39:58</p>
        </div>

        <div className="max-sm:mb-2 ">
            <div className="Dashboard__date text-[12px] items-center flex gap-2 p-1">
           <span className="flex gap-[5px] items-center">
           <span><img src="/Images/icons/dashboarCalendar.png" alt="" /></span>  <h2 className="font-bold">Today</h2> 
            </span> 
            <span className="flex items-center gap-1">
           <span className="text-[#D0D5DD]"> | </span>   {formattedDate}
              </span>       
            </div>

        </div>
        </section> 


          <section>
            <div className="Dashboarb__quickAccess h-[106px] w-full max-sm:h-auto max-sm:pb-2">
              <h2 className="pt-3 pl-3 font-medium ml-4 max-sm:ml-0.5 max-sm:pl-1 max-xl:ml-0.5">Your Quick Access</h2>



              <div className="ml-5 max-sm:ml-1 max-xl:ml-1 mt-3 grid grid-cols-4 gap-2.5  mr-5 max-sm:mr-1 max-xl:mr-1 max-sm:grid-cols-2 max-sm:gap-3">
                
              
                <QuickAccess image={"/Images/icons/DasboarMcard.png"} Name={"Issue Instant Card"}/>
                <QuickAccess image={"/Images/icons/DasboarMcard.png"} Name={"Issue Instant Card"}/>
                <QuickAccess image={"/Images/icons/DasboarMcard.png"} Name={"Issue Instant Card"}/>
                <QuickAccess image={"/Images/icons/DasboarMcard.png"} Name={"Manage a Card"}/>

                


              </div>

            </div>


              <section>
              <div className="flex gap-1.5 items-center mt-2">
              <h2 className="font-bold text-[18px]">Analytics</h2> <hr className="text-[#D0D5DD] w-full" />
            </div>


                <div className="mt-2 grid grid-cols-4 gap-2.5 max-sm:grid-cols-2">
                  {/* first board analytics  */}
                   <DasboardAnalytics />
                   <DasboardAnalytics />
                   <DasboardAnalytics />
                   <DasboardAnalytics />
                </div>

              </section>


              <section className="mt-3 ">
                <div className="flex gap-2 max-sm:flex-col">
                      <MonthlyIssuan />

                  <RecentCardRequest />

                </div>

              </section>


              <section>

                {/* <CustomPieChart /> */}
                <div className="flex gap-2">


                

                   



                </div>
             
              </section>
            

              


          </section>



        </main>



    </div>
  )
}
