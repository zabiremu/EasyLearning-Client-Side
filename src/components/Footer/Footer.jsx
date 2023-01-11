import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="footer_section">
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="Social_Icon text-center">
                <h4 className="footer_Name">Follow Us</h4>
                <a href="">
                  <i class="fa-brands fa-facebook social"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-youtube social"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-twitter social"></i>
                </a>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="Social_Icon">
                <h4 className="footer_Name">Address</h4>
                <div className="footer_content">
                  <p className="Footer_description">
                    320 Polmart Road National Pike Caston Villa
                  </p>
                  <p className="Footer_description">
                    <span>
                      <i
                        class="fa-solid fa-envelope"
                        style={{ paddingRight: "8px" }}
                      ></i>
                    </span>
                    Email: support@gmail.com
                  </p>
                  <p className="Footer_description">
                    <span>
                      <i
                        class="fa-solid fa-square-phone"
                        style={{ paddingRight: "8px" }}
                      ></i>
                    </span>
                    Phone: 123234322
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="Social_Icon">
                <h4 className="footer_Name">Information</h4>
                <div className="footer_content">
                  <a className="footerLink" href="">
                    About Me
                  </a>
                  <br />
                  <a className="footerLink" href="">
                    Company Profile
                  </a>
                  <br />
                  <a className="footerLink" href="">
                    Contact Us
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="Social_Icon">
                <h4 className="footer_Name">Policy</h4>
                <div className="footer_content">
                  <NavLink className="footerLink" to="/refund">
                    Refund Policy
                  </NavLink>
                  <br />
                  <NavLink className="footerLink" to="/terms">
                    Terms And Condition
                  </NavLink>
                  <br />
                  <NavLink className="footerLink" to="/privacy">
                    Privacy Policy
                  </NavLink>
                  <br />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="copyright">
          <Col lg={12} md={12} sm={12}>
           <p className="copyright_content text-center"> © Copyright 2016 by easy learning All rights reserved </p>
          </Col>
        </Container>
      </Fragment>
    );
  }
}
