import React from "react";
import "./categories.css";


const CategoriesComponent = () => {
  return (
    <>
      <div className="category-container  ">
        <div className="category-left">
        <i className="bi bi-geo-alt-fill">Mumbai, India</i><i className="bi bi-chevron-right"></i>
        </div>
        <div className="category-right  ">
        <ul className="category-items ">
            <li>Live Shows</li>
            <li>Streams</li>
            <li>Movies</li>
            <li>Plays</li>
            <li>Events</li>
            <li>Sports</li>
            <li>Activities</li>
        </ul>
        </div>
      
      </div>
      
    </>
  );
};

export default CategoriesComponent;
