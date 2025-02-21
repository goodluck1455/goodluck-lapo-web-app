// import ComplaintResolve from "./ComplaintLog";
import SideBarPage from "./SideBarPage";
import "../CSS-FOLDER/SideBar.css"
import { Routes, Route } from 'react-router-dom';
import ComplaintLog from "./ComplaintLog";
// import User from "./ComplaintResolve";
import ComplaintResolve from "./ComplaintResolve";
import CardProfile from "./CardProfile";
import CreateProfile from "./CreateProfile";
import CardScheme from "./CardScheme";
import Dashboard from "./Dashboard";
// import User from "./User";
// import Table from "./Table";
// import { Outlet } from "react-router-dom";

export default function MainPage() {

  return (
    <div>
       <div className="flex  ">
      
        <SideBarPage />
     
      
     
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="ComplaintLog" element={ <ComplaintLog /> } />
          <Route path="CardProfile" element={<CardProfile />} />
          <Route path="CreateProfile" element={<CreateProfile />} />
          <Route path="CardScheme" element={<CardScheme />} />
          <Route path="complaintResolve" element={<ComplaintResolve/>} />
          {/* 
          <Route path="CardScheme" element={<CardScheme />} />
          <Route path="/ProductDescription" element={<ProductDescription />} />
          <Route path="*" element={<NotFound /> } /> */}
        </Routes>
        {/* <ComplaintResolve /> */}
    
       </div>
      


    </div>
  )
}
