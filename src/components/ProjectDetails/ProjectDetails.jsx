import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";

function ProjectDetails() {
  let params = useParams();
  let { projectID } = params;

  const [details, setUpdate] = useState({
    img: "",
    p_name: "",
    project_description: "",
  });
  useEffect(() => {
    RestClient.getRequest(AppUrl.projectsDetails + projectID).then((result) => {
      console.log(result)
      setUpdate({
        img: result["image_two"],
        p_name: result["project_name"],
        project_description: result["project_description"],
      });
    });
  },[]);
  return (
    <Fragment>
      <Container className="pt-4">
        <Row className="pt-5">
          <Col lg="6" md="6" sm="6">
            <div className="about-thumb-wrap after-shape"></div>
            <img src={details.img} alt="" />
          </Col>
          <Col lg="6" md="6" sm="6">
            <div>
              <h4 className="p-details-title">{details.p_name} </h4>
              <p className="p-details-para">{details.project_description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ProjectDetails;
