import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import clientProfile from "../../assets/image/face.png";
import clientProfile2 from "../../assets/image/young-attractive-woman-smiling-feeling-healthy-hair-flying-wind.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
export default class Review extends Component {
  constructor() {
    super();
    this.state = {
      AllData: [],
    };
  }
  componentDidMount() {
    RestClient.getRequest(AppUrl.clientReview).then((result) => {
      this.setState({ AllData: result });
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      vertical: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
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
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            autoplay: true,
            autoplaySpeed: 3000,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          },
        },
      ],
    };

    const lists = this.state.AllData;
    const list = lists.map((result) => {
      return (
        <div>
          <Row className="justify-content-center">
            <Col lg={6} md={6} sm={12}>
              <div className="">
                <img
                  src={result.client_img}
                  alt=""
                  className="client_profile"
                />
                <h2 className="client_name">{result.client_name}</h2>
                <p className="review-desc text-center">
                  {result.client_description}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      );
    });
    return (
      <Fragment>
        <Container fluid className="review">
          <h1 className="review_title text-center">Testimoinal</h1>
          <div className="review_bottom"></div>
          <Slider {...settings}>
            {list}
          </Slider>
        </Container>
      </Fragment>
    );
  }
}
