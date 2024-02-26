import React from "react";
import Footer from "./Footer";
import Lorem from "./Lorem";
import DataTable from "./DataTable";
import Header from "./Header";

const Content = () => {
  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        {/* <!-- Navbar --> */}
        <Header/> 
        <Lorem/>
        
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <DataTable/>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Content;
