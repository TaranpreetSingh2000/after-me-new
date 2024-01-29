import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faMagnifyingGlass, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import style from '../home/Home.module.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <FontAwesomeIcon icon={faArrowLeft} className={style.slickArrow} />,
    nextArrow: <FontAwesomeIcon icon={faArrowRight} className={style.slickArrow} />,
  };

  return (
    <div>

<nav className={`navbar navbar-dark bg-dark justify-content-between px-3 ${style.carouselnavbar}`}>
        <Link to="/" className={`navbar-brand ${style.navtitle}`}>Family Insights</Link>
        <div className={style.icons}>
          <Link to="/" className={style.icon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>

          <Link to="/login" className={style.icon}>
            <FontAwesomeIcon icon={faUser} />
          </Link>

          <Link to="/" className={style.icon}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </nav>


      <div className={`carousel-container ${style.carouselmain}`}>
        <Slider {...carouselSettings}>
          <div>
            {/* Image for Carousel Slide 1 */}
            <img className={style.slickimage}
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Slide 1"
            />
          </div>
          <div>
            {/* Image for Carousel Slide 2 */}
            <img className={style.slickimage}
              src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Slide 2"
            />
          </div>
          <div>
            {/* Image for Carousel Slide 3 */}
            <img className={style.slickimage}
              src="https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Slide 3"
            />
          </div>
          {/* Add more slides as needed */}
        </Slider>

        {/* <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p>...</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
