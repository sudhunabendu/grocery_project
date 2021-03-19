import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Carousel from 'react-bootstrap/Carousel';

class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="assets/images/banner-01.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="m-b-20"><strong>Welcome To <br /> Freshshop</strong></h1>
              <p className="m-b-40">See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
              <p><a className="btn hvr-hover" href="#">Shop New</a></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="assets/images/banner-02.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p><a class="btn hvr-hover" href="#">Shop New</a></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="assets/images/banner-03.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <p><a class="btn hvr-hover" href="#">Shop New</a></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;