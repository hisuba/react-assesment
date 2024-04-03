import axios from "axios";
import React, { useEffect, useState } from "react";
import "./recommendedshows.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Rectangle2 from '../../assets/Rectangle2.svg';
import "swiper/css/pagination";
import "swiper/css";

const RecommendedShows = () => {
  const [eventss, setEventss] = useState([]);

 const  imgUrl= "https://drive.google.com/file/d/1lS1XAo47YvNSoFp1NE5rmhTSQ8qNBWEh/view";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
        );
        setEventss(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);
console.log('events:', eventss)
  // console.log("Events:", eventss);
  // console.log("Eventswww:", eventss);
  // console.log('Events:', events.eventName);
  // console.log('Events:', events.eventName);
  // console.log('Events:', events.eventName);
  return (
    <>
      <div className="shows-container">
        <div className  ='d-flex justify-content-around'>
        <h6>Recommended Shows <i className="bi bi-arrow-right "></i> </h6>
        <p className="text-white">See all</p>
        </div>

       <Swiper 
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={5}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div>
            {eventss &&
              eventss.map((event, index) => (
                <SwiperSlide className="Swiper border rounded w-25 " key={index} >
                 <div className="slide-text d-flex">
                  <div className="left">
                    <span>{event.eventName}</span><br/>
                    <i className="bi bi-geo-alt-fill">{event.cityName}</i>
                  </div>
                  <div className="right">
                    <span>{event.date}</span><br/>
                    <span>{event.weather}</span>
                  </div>
                 </div>
                </SwiperSlide>
              ))}
          </div>

        </Swiper>

        {/*  <table>
                <thead>
                    <tr>
                        <th>eventName</th>
                        <th>cityName</th>
                        <th>date</th>
                        <th>weather</th>
                       
                    </tr>
                </thead>
                <tbody>
                {eventss && eventss.map((event, index) => (
                        <tr key={index}>
                            <td>{event.eventName}</td>
                            <td>{event.cityName}</td>
                            <td>{event.date}</td>
                            <td>{event.weather}</td>
                            <td>
                            <img src= {event.imgUrl} alt= "image"/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>  */}
      </div>
    </>
  );
};

export default RecommendedShows;
