import { useNavigate } from "react-router-dom";
import "../CSS-FOLDER/CreateProfile.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { useComplaintContext } from "./ComplaintContext";
import { useState } from "react";



export default function CreateProfile() {
   const creatNavigat = useNavigate();
   const [schemeFormOpen, setSchemeFormOpen] = useState(false)

      
     const {navbar, setNavbar} = useComplaintContext();

     const showSideBar = ()=>{

      setNavbar(!navbar)
      // setIsOpen(!isOpen);
  }



  return (
    <div className="w-screen complaintRe____header-body h-screen   scroll-smooth  scrollbar-hide max-xl:w-full">

<div className="overflow-y-auto scrollbar-hide h-screen">

      <div className="sticky top-0 z-10">
      <section className="bg-white">
        <div className="complaint___container ">
          
          <section className="flex justify-between items-center">
          
          <div className="flex gap-2.5 items-center complaint___infoLogo max-sm:gap-0.5">
             <span className="cursor-pointer flex gap-2 items-center "
               onClick={() => creatNavigat("/CardProfile")}
             >
              <div className="hidden max-xl:hidden max-sm:hidden" onClick={showSideBar}>
                                       <FaBarsStaggered />
                                      </div>
              <img src="/Images/icons/chevron-left.png" alt="" className="max-sm:mr-[-0.3rem]" />Back
              <img src="/Images/icons/credit-card-pos.png" alt="" className=""/>
              </span>
             <span className="flex items-center gap-2 text-[#475467]">
              
              <img src="/Images/icons/chevron-right.png" alt="" />
              Card Profile
              <img src="/Images/icons/chevron-right.png" alt="" className="" />
              {/* <img src="/Images/icons/chevron-right.png" alt=""  />  */}</span>
             <span className="font-bold text-[#001735] max-sm:hidden">Create Profile</span>
          
          </div>

          <div className="flex gap-7 items-center complaint____bellCont max-xl:mr-3">
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

        </div>

        <section className="complaint___container">
        <div className="complaint___logTitle">
          <h1 className="font-bold text-3xl">Create Profile</h1>
          <p className="text-[#475467] text-[1.2rem] pt-2">Fill in profile details and add card fee</p>
        </div>
        </section>

        <section className="ml-[1rem] mr-[1rem]">
          <div className="  pb-[2rem] h-auto w-full bg-[#FFFFFF] border-[#E2E2E2] border rounded-[10px] ">

            <form action="" className="max-xl:w-fit max-md:w-full">
                <div>
                  <h2 className="text-[#121212] text-[20px] font-normal pt-2.5 ml-10 max-md:ml-2 max-lg:ml-4">Profile Details</h2>
                </div>


                      <div className="flex gap-10 max-sm:flex-col max-xl:gap-1">
                <div>
                  <div className="ml-10 mt-5 max-sm:ml-2 max-xl:ml-4 mr-10 max-sm:mr-2 max-lg:ml-4">
                  <label htmlFor="">Card Name *</label> <br />
                  <input type="text"  placeholder="Enter card name" className="createProfile__inputeForm 
                  w-[448px] max-xl:w-[308px] mt-2 outline-none max-sm:w-full max-md:w-full"/>
                  </div>

                  <div className="ml-10 mt-5 max-sm:ml-2  max-xl:ml-4 mr-10 max-sm:mr-2 max-lg:ml-4">
                  <label htmlFor="">Card Scheme*</label> <br />
                  <select name="" id="" className="createProfile__inputeForm w-full max-xl:w-[308px] max-sm:w-full  mt-2 outline-none">
                    <option value="">Verse</option>
                  </select>
                  </div>

                  <div className="ml-10 mt-5 max-sm:ml-2  max-xl:ml-4 mr-10 max-sm:mr-2 max-lg:ml-4">
                  <label htmlFor="">Description</label> <br />
                  <input type="text"  placeholder="Enter card name" className="createProfile__inputeForm w-[448px] max-xl:w-[308px] max-sm:w-full mt-2 outline-none"/>
                  </div>

                  <div className="ml-10 mt-5 max-sm:ml-2  max-xl:ml-4 mr-10 max-sm:mr-2 max-lg:ml-4">
                  <label htmlFor="">Branch Blacklist</label> <br />
                  <select name="" id="" className="createProfile__inputeForm w-[448px] max-xl:w-[308px] max-sm:w-full mt-2 outline-none">
                    <option value="Head Office" className="text-[#667085]">Head Office</option>
                  </select>
                  </div>
                  

                </div>

                      <div>
                      <div className="ml-10 mt-5 max-sm:ml-2 max-xl:ml-1 mr-10 max-sm:mr-1 max-lg:ml-4">
                  <label htmlFor="">Bin Prefix*</label> <br />
                  <input type="text"  placeholder="00000000" className="createProfile__inputeForm w-[448px] max-xl:w-[308px] max-sm:w-full mt-2 outline-none"/>
                  </div>

                  <div className="ml-10 mt-5 max-sm:ml-2 mr-10 max-xl:ml-1 max-sm:mr-1 max-lg:ml-4">
                  <label htmlFor="">Expiration *</label> <br />
                  <input type="number"  placeholder="0" className="createProfile__inputeForm w-[448px] max-xl:w-[308px] max-sm:w-full mt-2 outline-none"/>
                  </div>

                  <div className="ml-10 mt-5 max-sm:ml-2 mr-10 max-xl:ml-1 max-sm:mr-2 max-lg:ml-4">
                  <label htmlFor="">Currency *</label> <br />
                  <select name="" id="" className="createProfile__inputeForm w-[448px] max-xl:w-[308px] max-sm:w-full mt-2 outline-none">
                    <option value="">NGN</option>
                  </select>
                  </div>



                      </div>


                </div>

            </form>


          </div>

        </section>

        <section className="ml-[1rem] mr-[1rem] mt-3">
          <div className="h-[262px] bg-[#FFFFFF] w-full border-[#E2E2E2] border rounded-[10px]">
            <p className="text-[#121212] text-[20px] font-bold pt-2.5 ml-4 max-md:ml-2">Fees</p>
            <div  
             onClick={()=>setSchemeFormOpen(true)}
              className="bg-[#014DAF] complaint__LogComplain ml-4 flex gap-2.5 items-center text-white cursor-pointer ">
                <span>
                 +
                </span>
                <span>
              <h2>Add Profile</h2>
                </span>
              </div>

              <div className="overflow-x-auto p-2.5">
            <table className="w-full border-collapse border-l-0 border-r-0  border-t border-b border-gray-300">
  <thead className="bg-[#F9FAFB] ">
    <tr className=" text-[#475467] text-center">
      <th className=" border border-gray-300  h-10 font-medium text-sm">Name</th>
      <th className=" border border-gray-300 px-4 py-2 font-medium text-sm">Value</th>
      <th className=" border border-gray-300 px-4 py-2 font-medium text-sm">Frequency</th>
      <th className=" border border-gray-300 px-4 py-2 font-medium text-sm">Currency</th>
      <th className=" border border-gray-300 px-4 py-2 font-medium text-sm">Time</th>
      <th className=" border border-gray-300 px-4 py-2 font-medium text-sm">Account Pad</th>
      <th className=" border border-gray-300 px-4 py-2 font-medium text-sm">Account</th>
    </tr>
  </thead>
  <tbody>
   
      
      <tr className="bg-[#FFFFFF] text-[#475467] h-10 text-center font-light text-[14px] text-sm"  >
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
    </tr>
  
  
 
  
    
 
  </tbody>
</table>
    
    </div>
          

          
          </div>

          <div  
            //  onClick={() => navigate("/CreateProfile")}
              className="bg-[#014DAF] complaint__LogComplain ml-4 flex gap-2.5 items-center text-white cursor-pointer ">
              
                <span>
              <h2>Create Profile</h2>
                </span>
              </div>



              {schemeFormOpen && (
        <div  className="fixed inset-0 flex justify-center bg-[#64646466]/50 backdrop-blur-md scroll-auto overflow-y-scroll z-20">
        <div className="">

         <div className="complaint__Form___Container w-[470px] pb-2 mt-30  z-20 max-sm:w-fit">
           
            <div className="flex gap-11 p-3.5 justify-between">

          <div className="flex  p-2.5 gap-1.5">
            <span>
              <img src="/Images/icons/FormComplain.png" alt="" />
            </span>
            <span>
              <p className="text-[18px] font-bold text-[#101828]">Add Fee</p>
              <p className="text-[#475467] text-[14px]">Fill in fee details.</p>
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

              <label htmlFor="" className="form__label text-[#344054]">Curency</label> <br />
              <label className="relative cursor-pointer">
        <input type="radio" name="option" className="hidden peer" />
        <div className="w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-4 peer-checked:border-green-500"></div>
      </label><br />
              {/* <select name="" id=""  className="mt-1  mb-3 complaine__FormInput text-[#344054] pl-3">
                <option value="">Select category from dropdown</option>
                <option value=""></option>
              </select> */}

             

                      <button type="button"  className="Form__btn w-[420px] max-sm:w-full text-white font-bold mt-1 cursor-pointer">Add Fee</button>   
        
            </form>
              </div>
           
             


         </div>


              
              </div>
            </div>)}

        </section>


        </div>
    </div>
  )
}
