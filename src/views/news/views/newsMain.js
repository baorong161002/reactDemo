import React from "react";
import "./style.css";
import { Carousel } from "antd";

function CarouselNews() {
  return (
    <Carousel autoplay dotPosition={"top"}>
      <div>
        <img
          src={[require("@/static/image/news2.jpg")]}
          style={{ width: 640, height: 480 }}
          alt="南京"
        />
      </div>
      <div>
        <img
          src={[require("@/static/image/news5.jpg")]}
          style={{ width: 640, height: 480 }}
          alt="南京"
        />
      </div>
      <div>
        <img
          src={[require("@/static/image/news3.jpg")]}
          style={{ width: 640, height: 480 }}
          alt="南京"
        />
      </div>
      <div>
        <img
          src={[require("@/static/image/news4.jpg")]}
          style={{ width: 640, height: 480 }}
          alt="南京"
        />
      </div>
    </Carousel>
  );
}

class newsMain extends React.Component {
  render() {
    return <CarouselNews />;
  }
}

export default newsMain;
