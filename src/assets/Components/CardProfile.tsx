// import { useState } from "react"
import { useProfile } from "./ProfileContext"
import { useNavigate } from "react-router-dom";
// import { data } from "react-router-dom"
// import { useComplaintContext } from "./ComplaintContext"
import { FaBarsStaggered } from "react-icons/fa6";
import { useComplaintContext } from "./ComplaintContext";

export default function CardProfile() {

const { profile, editProfile, deleteProfile } = useProfile();
const navigate = useNavigate();

   const {navbar, setNavbar} = useComplaintContext();

     const showSideBar = ()=>{

      setNavbar(!navbar)
      // setIsOpen(!isOpen);
  }



  // const {  selectedData  } = useComplaintContext()
  return (
    <div className="w-screen complaintRe____header-body h-screen   scroll-smooth  scrollbar-hide ">
      
      <section className="bg-white">
        <div className="complaint___container ">
          
          <section className="flex justify-between items-center">
          
          <div className="flex gap-2.5 items-center complaint___infoLogo">
             <div className="hidden max-xl:block" onClick={showSideBar}>
                                                   <FaBarsStaggered />
                                                  </div>
            <div className="max-sm:hidden">
            <img src="/Images/icons/infoComplaintLog.png" alt="" /> 
            </div>
           <div>
            <h2>  Card Profile</h2>
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
          <h1 className="font-bold ">Card Profile</h1>
          <p className="text-[#475467] text-[14px]">Create, view and edit card profiles here.</p>
        </div>

        <section className="flex justify-between max-sm:flex-col">
              <div className="flex max-sm:mt-4"> 
              <div className="flex items-center gap-1.5 table___searchBar cursor-pointer">
                <span className="absolute top-[9.5rem] z-10 pl-2 ">
                <img src="/Images/icons/search-sm.png" alt="" className="w-[1rem]"/>
                </span>
                <span>
                <input className="bg-[#FFFFFF] input__searchBar border-[#D0D5DD] border" type="text"  placeholder="Search complaint"/>
                </span>
              </div>
              </div>


              <div  
             onClick={() => navigate("/CreateProfile")}
              className="bg-[#014DAF] complaint__LogComplain flex gap-2.5 items-center text-white cursor-pointer max-sm:ml-auto">
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





    </div>
  )
}
