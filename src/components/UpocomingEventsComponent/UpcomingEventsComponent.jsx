import axios from "axios";
import React, { useEffect, useState } from "react";
import banner from '../../assets/Banner.svg'
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import './upcomingevents.css';

const UpcomingEventsComponent = () => {
  const [eventss, setEventss] = useState([]);

 const imgUrl= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Frandom%2F&psig=AOvVaw0rGsMLD2vgdVJb7c3vpw6u&ust=1712148507908000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjWqa7Io4UDFQAAAAAdAAAAABAE";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming"
        );
        setEventss(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
<div className="container" >
      <div className="row">
        {eventss.map((event, index) => (
          <div className="col-md-4 mb-3" key={event.id}>
            <div className="card ">
              <div className="card-body">
{/*                <p style = {{marginTop:"100px"}}>{event.date}</p> */}
              </div>
              <div className="card-footer ">
              <p className="card-text" style ={{marginBottom:"25px",backgroundColor:"transparent"}}>{event.date}</p>
              <h6 className="card-title">{event.eventName}</h6>
              <div className="footer-text d-flex justify-content-between">
              <i className="bi bi-geo-alt-fill" style ={{fontSize:"11px"}}>{event.cityName}</i>
              <i style ={{fontSize:"12px"}}>{event.weather}</i>
              </div>
            
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default UpcomingEventsComponent;
