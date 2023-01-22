import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      
      autoplaySpeed: 3500,
    };
    // console.log(this.props.autoData);
    const styles = {
      backgroundColor: "green",
      width: "100%",
      borderRadius: "1rem",
    };
    return (
      <div>
        <Slider {...settings} width="100%">
          {this.props.autoData.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.image} style={styles} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
