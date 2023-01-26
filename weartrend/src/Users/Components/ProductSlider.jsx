import { Box, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class ProductSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box>
        <Slider {...settings}>
          {this.props.dataProd?.map((item) => {
            return (
              <Link to={`/singleproduct/${item.id}`} key={item.id}>
                <div>
                  <div>
                    <img src={item.image} width={"100%"} />
                  </div>
                  <Text textAlign={"center"}>{item.brand}</Text>
                  <Text textAlign={"center"}>₹ {item.price}</Text>
                </div>
              </Link>
            );
          })}
        </Slider>
      </Box>
    );
  }
}
