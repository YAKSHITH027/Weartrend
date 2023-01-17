import { Text } from "@chakra-ui/react";
import React, { Component } from "react";
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
      <div>
        <Slider {...settings}>
          <div>
            <div>
              <img
                src="https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12413479_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"
                alt=""
                width={"100%"}
              />
            </div>
            <Text textAlign={"center"}>carro mano</Text>
            <Text textAlign={"center"}>300</Text>
          </div>
          <div>
            <div>
              <img
                src="https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12413479_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"
                alt=""
                width={"100%"}
              />
            </div>
            <Text textAlign={"center"}>carro mano</Text>
            <Text textAlign={"center"}>300</Text>
          </div>
          <div>
            <div>
              <img
                src="https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12413479_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"
                alt=""
                width={"100%"}
              />
            </div>
            <Text textAlign={"center"}>carro mano</Text>
            <Text textAlign={"center"}>300</Text>
          </div>
          <div>
            <div>
              <img
                src="https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12413479_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"
                alt=""
                width={"100%"}
              />
            </div>
            <Text textAlign={"center"}>carro mano</Text>
            <Text textAlign={"center"}>300</Text>
          </div>
          <div>
            <div>
              <img
                src="https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12413479_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"
                alt=""
                width={"100%"}
              />
            </div>
            <Text textAlign={"center"}>carro mano</Text>
            <Text textAlign={"center"}>300</Text>
          </div>
          <div>
            <div>
              <img
                src="https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12413479_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"
                alt=""
                width={"100%"}
              />
            </div>
            <Text textAlign={"center"}>carro mano</Text>
            <Text textAlign={"center"}>300</Text>
          </div>
          <div>
            <div>
              <img
                src="https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12413479_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"
                alt=""
                width={"100%"}
              />
            </div>
            <Text textAlign={"center"}>carro mano</Text>
            <Text textAlign={"center"}>300</Text>
          </div>
          <div>
            <div>
              <img
                src="https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12413479_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"
                alt=""
                width={"90%"}
              />
            </div>
            <Text textAlign={"center"}>carro mano</Text>
            <Text textAlign={"center"}>300</Text>
          </div>
          <div>
            <div>
              <img
                src="https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12413479_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"
                alt=""
                width={"100%"}
              />
            </div>
            <Text textAlign={"center"}>carro mano</Text>
            <Text textAlign={"center"}>300</Text>
          </div>
        </Slider>
      </div>
    );
  }
}
