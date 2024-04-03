import React from "react";
import Banner from "../../assets/Banner.svg";
import RecommendedShows from "../RecommendedShowsComponents/RecommendedShows";
import "./banner.css";
import UpcomingEventsComponent from "../UpocomingEventsComponent/UpcomingEventsComponent";
const BannerComponent = () => {
  return (
    <>
    <div className="banner-container">
      <section className="banner ">
        <div className="headings">
          <h1>Discover Exciting Events happening</h1>
          <h1>Near You - Stay Tuned for Updates!</h1>
        </div>
        <div className="subtitle">
          <p>
            Dorem ipsum dolor sit amet, consectetuer adipiscing. Nunc vulputate
            libero et velit interdum,
            <br/>
              ac aliquet odio mattis. Class aptent taciti socio ad litora
              torquent per conubia nostra, per
            
          </p>
        </div>
      </section>
    
    </div>
    <RecommendedShows/>
    <UpcomingEventsComponent/>
    </>
  );
};

export default BannerComponent;
