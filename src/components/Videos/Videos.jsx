import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Videos extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className="service_title text-center">Our Videos</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="service-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
              <br/><br/>
              Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint?
              <br/><br/>
              Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              Video
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
