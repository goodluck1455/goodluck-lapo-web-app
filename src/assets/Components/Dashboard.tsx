// import React from 'react'

export default function Dashboard() {
  return (
    <div className="w-screen complaintRe____header-body h-screen   scroll-smooth  scrollbar-hide ">
         

         <section className="bg-white">
        <div className="complaint___container ">
          
          <section className="flex justify-between items-center">
          
          <div className="flex gap-2.5 items-center complaint___infoLogo">
            <div>
            <img src="/Images/icons/dashboard.png" alt="" /> 
            </div>
           <div>
            <h2> Dashboard </h2>
           </div>
          
          </div>

          <div className="flex gap-7 items-center complaint____bellCont">
            <span>

            <div className="flex items-center gap-1.5 table___searchBar cursor-pointer">
          <span className="searcgBAR__Dasbord absolute top-2.4 z-10 w-[1.8rem] ml-2 rounded-[97.9916px]"> 
          <img src="/Images/icons/search-sm.png" alt="" className="w-[1rem]" />
          </span>
          <span>
          <input className="bg-[#FFFFFF] input__searchBar border-[#D0D5DD] border-[0.979916px]" type="text"  placeholder="Search complaint"/>
          </span>
        </div>
            </span>

            <span>
            <img src="/Images/icons/inforContact.png" alt="" />
            </span>
           
          </div>

          </section>
                  
        </div>

        </section>



    </div>
  )
}
