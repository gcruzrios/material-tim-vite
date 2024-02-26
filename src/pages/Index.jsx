import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";



const Index = () => {
  return (
    <div>
      
      <div className="row">
       <div className="col-lg-2">
       <Sidebar />
       </div>
       <div className="col-lg-10">
       
       <Content /> 
       </div>
       </div> 

     
    </div>
  );
};

export default Index;
