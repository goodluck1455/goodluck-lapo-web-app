// import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
import { useProfile } from "./ProfileContext"
import { useComplaintContext } from "./ComplaintContext";
import { useState } from "react";

export default function CardRequest() {
const [schemeFormOpen, setSchemeFormOpen] = useState(false)
    const { profile, editProfile, deleteProfile, addProfile}= useProfile();
    //  const navigate = useNavigate()

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
             <div className="hidden max-sm:block" onClick={showSideBar}>
                         <FaBarsStaggered />
                        </div>
            <div className="max-sm:hidden">
            <img src="/Images/icons/infoComplaintLog.png" alt="" /> 
            </div>
           <div>
            <h2>  Card Request</h2>
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
          <h1 className="font-bold ">Card Scheme</h1>
          <p className="text-[#475467] text-[14px]">Add, view and edit card schemes here..</p>
        </div>

        <section className="flex justify-between max-sm:flex-col max-sm:mt-4">
              <div className="flex"> 
              <div className="flex items-center gap-1.5 table___searchBar cursor-pointer">
                <span className="absolute top-[9.5rem] z-10 pl-2 max-sm:top-[9.8rem]">
                <img src="/Images/icons/search-sm.png" alt="" className="w-[1rem]"/>
                </span>
                <span>
                <input className="bg-[#FFFFFF] input__searchBar border-[#D0D5DD] border" type="text"  placeholder="Search complaint"/>
                </span>
              </div>
              </div>


              <div  
             onClick={() => setSchemeFormOpen(true)}
              className="bg-[#014DAF] complaint__LogComplain flex gap-2.5 
              items-center text-white cursor-pointer max-sm:ml-auto">
                <span>
                 +
                </span>
                <span>
              <h2>Add Profile</h2>
                </span>
              </div>
            </section>






            <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse rounded-lg border border-gray-300">
  <thead className="bg-[#F9FAFB] rounded-t-lg">
    <tr className=" text-[#475467] text-center">
      <th className="border border-gray-300 px-4 py-2 h-10 font-medium text-sm">Card Name</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-sm">Currency</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-sm">Expiration</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-sm">Bin Prefix</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-sm">Date Created</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-sm">Action</th>
    </tr>
  </thead>
  <tbody className="rounded-b-lg ">
    {profile.map((data)=>{
        return(
      <tr className="bg-[#FFFFFF] text-[#475467] h-10 text-center font-light text-[14px] text-sm" key={data.id} >
      <td className="border border-gray-300 px-4 py-2">{data.CardName}</td>
      <td className="border border-gray-300 px-4 py-2">{data.Currency}</td>
      <td className="border border-gray-300 px-4 py-2">{data.Expiration}</td>
      <td className="border border-gray-300 px-4 py-2">{data.BinPrefix}</td>
      <td className="border border-gray-300 px-4 py-2">{data.DateCreated}</td>
      <td className="border border-gray-300 px-4 py-2">
        <div className="flex justify-center">
          <span 
          onClick={() => deleteProfile(data.id)}
          className="cursor-pointer">
            <img src="/Images/icons/delect.png" alt="" />
          </span>
          <span
         onClick={() => editProfile(data.id, data)}
          className="cursor-pointer">
            <img src="/Images/icons/edit.png" alt="" />
          </span>
        </div>
      </td>
    </tr>
        )

    })}
    
 
  </tbody>
</table>
    
    </div>



        </section>



        {schemeFormOpen && (
        <div  className="fixed inset-0 flex justify-center bg-[#64646466]/50 backdrop-blur-md scroll-auto overflow-y-scroll z-20">
        <div className="">

         <div className="complaint__Form___Container w-[470px] pb-2 mt-30  z-20 max-sm:w-fit">
           
            <div className="flex gap-11 p-3.5">

          <div className="flex  p-2.5 gap-1.5">
            <span>
              <img src="/Images/icons/FormComplain.png" alt="" />
            </span>
            <span>
              <p className="text-[18px] font-bold text-[#101828]">Add Card Scheme</p>
              <p className="text-[#475467] text-[14px]">Fill in scheme name and PAN length.</p>
            </span>
          </div>

          <div onClick={() => setSchemeFormOpen(false)} className="cursor-pointer">
            <img src="/Images/icons/Button close X.png" alt="" />
          </div>

            </div>

              <div className="ml-6 max-sm:ml-2 max-sm:mr-2">
              <form action="">

              <label htmlFor="" className="text-[#344054"> Scheme Name*</label> <br />
              <input type="text" className="mt-1 complaine__FormInput w-[420px] max-sm:w-full pl-4 mb-3" placeholder="Verse"/><br />

              <label htmlFor="" className="form__label text-[#344054]">PAN Length</label> <br />
              <input type="number" className="mt-1 complaine__FormInput w-[420px] pl-4 mb-3 max-sm:w-full" placeholder="0"/> <br />
              {/* <select name="" id=""  className="mt-1  mb-3 complaine__FormInput text-[#344054] pl-3">
                <option value="">Select category from dropdown</option>
                <option value=""></option>
              </select> */}

             

                      <button type="button" onClick={()=>addProfile} className="Form__btn w-[420px] max-sm:w-full text-white font-bold mt-1 cursor-pointer">Add Scheme</button>   
        
            </form>
              </div>
           
             


         </div>


              
              </div>
            </div>)}
     



    </div>
  )
}
