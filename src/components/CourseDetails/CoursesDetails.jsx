import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image from "../../assets/image/brainstorm-meeting.jpg";
import { useParams } from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import LoadIcon from "../LoadIcon/loadIcon";

function CoursesDetails() {
  const params = useParams();
  const { courseID } = params;

  const [data, setData] = useState({
    short_title: "",
    short_description: "",
    short_img: "",
    long_title: "",
    long_description: "",
    total_student: "",
    total_duration: "",
    total_lecture: "",
    category: "",
    tags: "",
    author: "",
    loading: true,
  });

  useEffect(() => {
    RestClient.getRequest(AppUrl.courseDetails + courseID).then((result) => {
      setData({
        short_title: result["short_title"],
        short_description: result["short_description"],
        short_img: result["short_img"],
        long_title: result["long_title"],
        long_description: result["long_description"],
        total_student: result["total_student"],
        total_duration: result["total_duration"],
        total_lecture: result["total_lecture"],
        category: result["category"],
        tags: result["tags"],
        author: result["author"],
        loading: false,
      });
    });
  }, []);
  if (data.loading == true) {
    return <LoadIcon />
  } else {
    return (
      <Fragment>
        <Container>
          <Row className="mt-5">
            <Col lg="8" md="6" sm="6">
              <h2 className="pb-3 p-details-title">{data.long_title}</h2>
              <img src={data.short_img} alt="" className="pb-3" />
              <p className="p-details-para">{data.long_description}</p>
            </Col>
            <Col lg="4" md="6" sm="6">
              <div class="widget widget_feature mt-4">
                <h4 class="widget-title">Course Features</h4>
                <ul>
                  <li>
                    <i class="fa fa-user"></i>
                    <span>Enrolled :</span> {data.total_student}
                  </li>
                  <li>
                    <i class="fa fa-clock-o"></i>
                    <span>Duration :</span> {data.total_duration}
                  </li>
                  <li>
                    <i class="fa fa-clipboard"></i>
                    <span>Lectures :</span> {data.total_lecture}
                  </li>
                  <li>
                    <i class="fa fa-clone"></i>
                    <span>Categories:</span> {data.category}
                  </li>
                  <li>
                    <i class="fa fa-clone"></i>
                    <span>Tags:</span> {data.tags}
                  </li>
                  <li>
                    <i class="fa fa-clone"></i>
                    <span>Author:</span> {data.author}
                  </li>
                </ul>
                <div class="price-wrap text-center">
                  <h5>
                    Price:<span>$54.00</span>
                  </h5>
                  <Button className="w-100 h-100" variant="warning">
                    ENROLL COURSE
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CoursesDetails;
