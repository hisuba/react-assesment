import React from "react";
import "./navbar.css";
import CategoriesComponent from "../CategoriesComponent/CategoriesComponent";

const NavbarComponent = () => {
  return (
    <>
      <div className="container-fluid  w-100">
        <nav className="navbar  ">
          <div className="nav-items d-flex justify-content-around w-100  ">
            <div className="left ">
              <h4 className=" logo">BookUsNow</h4>
            </div>
            <div className="center  d-flex">
              <button className="btn btn-dark d-flex m-2">
                <i className="bi bi-justify"></i> Categories
              </button>
              {/*  <input type="text" className="form-control m-1 input" /> */}
              <div className="border bg-white m-2 rounded">
                <input
                  type="text "
                  className="border-0  "
                  style={{ width: "450px", height: "40px" }}
                />
                <i className="bi bi-search search"></i>
              </div>
            </div>
            <div className="right d-flex   ">
              <i className="bi bi-heart-fill  icon">
                <span> Favourites</span>{" "}
              </i>
              <button className="btn btn-light border" style = {{margin:"10px 10px 10px 20px"}}>Sign In</button>
            </div>
          </div>
        </nav>
      </div>
      <CategoriesComponent/>
    </>
  );
};

export default NavbarComponent;
