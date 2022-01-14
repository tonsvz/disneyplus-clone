import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-mandalorian2.jpg" alt="" srcset="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" srcset="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" srcset="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" srcset="" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  cursor: pointer;

  ul li button {
    &:before {
      font-size: 10px;
      color: #ffff;
    }
  }
  .slick-list {
    overflow: visible;
  }

  li.slick-active button::before {
    color: #ffffff;
  }

  button {
    z-index: -10;
  }
`;

const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0/69%) 0px 25px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: 0.5s;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition: 0.1s;
    }
  }
`;
