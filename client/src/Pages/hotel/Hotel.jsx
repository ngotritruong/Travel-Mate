import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import EmailFeedBack from "../../components/emailFeedback/EmailFeedBack";
import heroHeader from "../../Image/heroHeader.mp4";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hotel.css";

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);

  const handleOpenSlide = (i) => {
    setSlideNumber(i);
    setOpenSlide(true);
  };
  const handleMove = (direction) => {
    let newmumber;
    if (direction === "l") {
      newmumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newmumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newmumber);
  };

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className="hotel">
      <div className="hotelSlider">
        {openSlide && (
          <div className="sliderCr">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="slideClose"
              onClick={() => setOpenSlide(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="slideWrapper">
              <img
                src={photos[slideNumber].src}
                alt="My Awesome Image"
                className="slideImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("d")}
            />
          </div>
        )}
      </div>
      <div>
        <div className="headList">
          <video className="videoHero" autoPlay loop muted>
            <source src={heroHeader} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Header type="list" />
        </div>
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">Hotel Title</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Ha Noi VIET NAM</span>
            </div>
            <span className="hotelDistance">
              Excellent location - 500m from center
            </span>
            <span className="hotelPriceHighLight">
              Book a stay over $112 at a property and get a free airport taxi!
            </span>

            <div className="hotelImages">
              {photos.map((photo, index) => (
                <div className="hotelImgWrapper">
                  <img
                    key={index}
                    src={photo.src}
                    onClick={() => handleOpenSlide(index)}
                    alt="My Awesome Image"
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetail">
              <div className="hotelDetailText">
                <h1 className="hotelDetailTitle">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
                <p className="hotelDetailDesc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem mollitia ratione neque dolores quod. Aliquid
                  iure libero dolores recusandae error iusto molestias ab harum
                  voluptatem similique ducimus esse, quisquam quis, modi amet
                  laudantium quo nam facere. Debitis voluptas sapiente, dolor
                  suscipit voluptatum fuga ullam consectetur ut iure. Minus,
                  fugiat at!
                </p>
              </div>
              <div className="hotelDetailPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima dignissimos magni, repudiandae dicta facere molestiae
                  quibusdam optio
                </span>
                <h2>
                  <b>$945</b>(9-night)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="homContainer">
          <EmailFeedBack />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Hotel;
