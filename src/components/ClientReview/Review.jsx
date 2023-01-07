import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import clientProfile from "../../assets/image/face.png";
import clientProfile2 from "../../assets/image/young-attractive-woman-smiling-feeling-healthy-hair-flying-wind.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Review extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      vertical:true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            autoplay: true,
            autoplaySpeed: 3000,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          }
        }
      ]
    };
    return (
      <Fragment>
        <Container fluid className="review">
          <h1 className="review_title text-center">Testimoinal</h1>
          <div className="review_bottom"></div>
          <Slider {...settings}>
            <div>
              <Row className="justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <div className="">
                    <img
                      src={clientProfile}
                      alt=""
                      className="client_profile"
                    />
                    <h2 className="client_name">Jhon Doe</h2>
                    <p className="review-desc text-center">
                      Perfect!!!!! Zabir was very nice and helpful and also
                      professional with completing my design for my landing
                      page.I’m new to the entrepreneur world and he just make me
                      feel like I can take this world on with much more
                      confidence.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <div className="">
                    <img
                      src={clientProfile2}
                      alt=""
                      className="client_profile"
                    />
                    <h2 className="client_name">Lolita het</h2>
                    <p className="review-desc text-center">
                    He is not asking dumb questions just do the job, first he couldn't do it the way he wanted to so he found a solution right away without my help.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}
