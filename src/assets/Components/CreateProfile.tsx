import { useNavigate } from "react-router-dom";
import "../CSS-FOLDER/CreateProfile.css";

export default function CreateProfile() {
   const creatNavigat = useNavigate();


  return (
    <div className="w-screen complaintRe____header-body h-screen   scroll-smooth  scrollbar-hide ">


<section className="bg-white">
        <div className="complaint___container ">
          
          <section className="flex justify-between items-center">
          
          <div className="flex gap-2.5 items-center complaint___infoLogo">
             <span className="cursor-pointer flex gap-2 items-center"
               onClick={() => creatNavigat("/CardProfile")}
             >
              <img src="/Images/icons/chevron-left.png" alt="" /> Back
              <img src="/Images/icons/credit-card-pos.png" alt="" />
              </span>
             <span className="flex items-center gap-2 text-[#475467]">
              <img src="/Images/icons/chevron-right.png" alt="" />
              Card Profile
              <img src="/Images/icons/chevron-right.png" alt="" /></span>
             <span className="font-bold text-[#001735]">Create Profile</span>
          
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
          <h1 className="font-bold text-3xl">Create Profile</h1>
          <p className="text-[#475467] text-[1.2rem] pt-2">Fill in profile details and add card fee</p>
        </div>
        </section>

        <section>
          <div className=" ml-[1rem] mr-[1rem] createProfile___formContainer bg-[#FFFFFF] border-[#E2E2E2] border rounded-[10px]">

            <form action="">
                <div>
                  <h2 className="text-[#121212] text-[20px] font-normal pt-2.5 ml-10">Profile Details</h2>
                </div>


                      <div className="flex gap-10">
                <div>
                  <div className="ml-10 mt-5">
                  <label htmlFor="">Card Name *</label> <br />
                  <input type="text"  placeholder="Enter card name" className="createProfile__inputeForm mt-2 outline-none"/>
                  </div>

                  <div className="ml-10 mt-5">
                  <label htmlFor="">Card Scheme*</label> <br />
                  <select name="" id="" className="createProfile__inputeForm mt-2 outline-none">
                    <option value="">Verse</option>
                  </select>
                  </div>

                  <div className="ml-10 mt-5">
                  <label htmlFor="">Description</label> <br />
                  <input type="text"  placeholder="Enter card name" className="createProfile__inputeForm mt-2 outline-none"/>
                  </div>

                  <div className="ml-10 mt-5">
                  <label htmlFor="">Branch Blacklist</label> <br />
                  <select name="" id="" className="createProfile__inputeForm mt-2 outline-none">
                    <option value="Head Office" className="text-[#667085]">Head Office</option>
                  </select>
                  </div>
                  

                </div>

                      <div>
                      <div className="ml-10 mt-5">
                  <label htmlFor="">Bin Prefix*</label> <br />
                  <input type="text"  placeholder="00000000" className="createProfile__inputeForm mt-2 outline-none"/>
                  </div>

                  <div className="ml-10 mt-5">
                  <label htmlFor="">Expiration *</label> <br />
                  <input type="number"  placeholder="0" className="createProfile__inputeForm mt-2 outline-none"/>
                  </div>

                  <div className="ml-10 mt-5">
                  <label htmlFor="">Currency *</label> <br />
                  <select name="" id="" className="createProfile__inputeForm mt-2 outline-none">
                    <option value="">NGN</option>
                  </select>
                  </div>



                      </div>


                </div>

            </form>


          </div>

        </section>



    </div>
  )
}
