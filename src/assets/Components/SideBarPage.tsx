import { useState } from "react"
import "../CSS-FOLDER/SideBar.css"
import { NavLink } from "react-router-dom"


export default function SideBarPage() {
const [complainLogImag, setcomplainLogImag] = useState(false)

  return (
   <div className="">
    <div className="SideBar___body bg-[#002F6C]   top-0 left-0 scroll-smooth overflow-y-auto scrollbar-hide">
           
           <div className=" SideBar____Container ">

             
             <div className="Sidebar__Logo ">
                <img src="/Images/Lapo-logo.png" alt="" className="z-20" />
             </div>

             <NavLink to="/"> 
             <div className="flex gap-3 text-[#D0D5DD] Sidebar__dashbaoard items-center cursor-pointer">
              <div className="">
              <img src="/Images/dashboarLogo.png" alt="" className="font-bold" /> 
                </div>  
               
                <div>
                    <h2 className="">Dashboard</h2>
                </div>
             </div>
             </NavLink>

             <div className="sidebar__list-container">
                <h2 className="text-[#7E8B9C] sidebar__listHeading" >MAIN MENU</h2>
                <ul className="text-[#D0D5DD]">
                  
                    <li className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF] cursor-pointer"> 
                       <img src="/Images/icons/branch.png" alt=""  /> Branches 
                        </li> 

                    <li className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF]"> 
                    <img src="/Images/icons/roles.png" alt=""  /> Roles</li>
                    <li className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF]">
                    <img src="/Images/icons/users.png" alt=""  /> Users</li>
                   
                   <NavLink to="CardScheme"> <li className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF]"> 
                    <img src="/Images/icons/cardscheme.png" alt=""  /> Card Scheme</li></NavLink>
                    
              <NavLink to="/CardProfile">     <li className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF]"> 
                    <img src="/Images/icons/cardprofile.png" alt=""  />Card Profile</li></NavLink> 

                    <li className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF]"> 
                    <img src="/Images/icons/cardrequest.png" alt=""  /> Card Request</li>

                    <li className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF]"> 
                    <img src="/Images/icons/stock.png" alt=""  />  Stock Card</li>

                    <li className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF]"> 
                    <img src="/Images/icons/bockunbock.png" alt=""  />Bloack/Unblock Card</li>
                    <li className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF]">
                    <img src="/Images/icons/generateReissuePin.png" alt=""  /> Generated/Reissue Pin</li>
                
                    <NavLink to="ComplaintLog" 
                 
                    onMouseEnter={() => setcomplainLogImag(false)}
                    onMouseLeave={() => setcomplainLogImag(true)}
                    
                    >  <li 
                    
                    
                    className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF]"> 
                    
                    {complainLogImag ? <img src="/Images/icons/complaintLog.png" alt=""  />: <img src="/Images/icons/complainLogA.png" alt=""  />} 
                    Complaints: log Complaint</li> </NavLink>

                    <NavLink to="complaintResolve" >    <li className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF]"> 
                    <img src="/Images/icons/complaintResolve.png" alt=""  /> Complaints: Resolve</li> </NavLink>

                    <li className="flex gap-3">
                    <img src="/Images/icons/authoriseList.png" alt=""  /> Authorization List

                    </li>
                    <li className="flex gap-3 hover:bg-[#E4F0FF] hover:text-[#014DAF]" > 
                    <img src="/Images/icons/authoriseQueue.png" alt=""  />  Authorization Queue</li>
                    <li className="flex gap-3"> 
                    <img src="/Images/icons/trial.png" alt=""  />Trial</li>
                    <li className="flex gap-3"> 
                    <img src="/Images/icons/account.png" alt=""  /> Account</li>
                </ul>
             </div>


             <div className="flex gap-3 text-[#D0D5DD] Sidebar__dashbaoard items-center">
              <div className="">
              <img src="/Images/icons/logout.png" alt="" className="font-bold" /> 
                </div>  
                <div>
                    <h2 className="flex">
                   Logout</h2>
                </div>
             </div>

             <footer className="pb-3  sidebar__footer">
                <p className="italic text-[#7E8B9C]">POWERED BY</p>
                <img src="/Images/icons/poweredLogo.png" alt="" />
             </footer>




           </div>


    </div>
    </div>
  )
}
