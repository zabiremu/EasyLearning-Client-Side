import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class TermsAndCoditation extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} sm={12} md={12} className="mt-5">
              <h4 Service-name>Terms of Use</h4>
              <p className="service-desc">
                These Terms of Use ("Terms") were last updated on Sept. 23,
                2022.
                <br />
                <br />
                Udemy’s mission is to improve lives through learning. We enable
                anyone anywhere to create and share educational content
                (instructors) and to access that educational content to learn
                (students). We consider our marketplace model the best way to
                offer valuable educational content to our users. We need rules
                to keep our platform and services safe for you, us, and our
                student and instructor community. These Terms apply to all your
                activities on the Udemy website, the Udemy mobile applications,
                our TV applications, our APIs, and other related services
                (“Services”).
                <br />
                <br />
                If you publish a course on the Udemy platform, you must also
                agree to the Instructor Terms. We also provide details regarding
                our processing of personal data of our students and instructors
                in our Privacy Policy. If you are using Udemy as part of your
                employer’s Udemy Business learning and development program, you
                can consult our Udemy Business Privacy Statement.
                <br />
                <br />
                If you live in the United States or Canada, by agreeing to these
                Terms, you agree to resolve disputes with Udemy through binding
                arbitration (with very limited exceptions, not in court), and
                you waive certain rights to participate in class actions, as
                detailed in the Dispute Resolution section.
              </p>
            
            <h4 Service-name>Accounts</h4>
            <p className="service-desc">
              You need an account for most activities on our platform, including
              to purchase and access content or to submit content for
              publication. When setting up and maintaining your account, you
              must provide and continue to provide accurate and complete
              information,
              <br />
              <br />
              Udemy’s mission is to improve lives through learning. We enable
              anyone anywhere to create and share educational content
              (instructors) and to access that educational content to learn
              (students). We consider our marketplace model the best way to
              offer valuable educational content to our users. We need rules to
              keep our platform and services safe for you, us, and our student
              and instructor community. These Terms apply to all your activities
              on the Udemy website, the Udemy mobile applications, our TV
              applications, our APIs, and other related services (“Services”).
              <br />
              <br />
              If you publish a course on the Udemy platform, you must also agree
              to the Instructor Terms. We also provide details regarding our
              processing of personal data of our students and instructors in our
              Privacy Policy. If you are using Udemy as part of your employer’s
              Udemy Business learning and development program, you can consult
              our Udemy Business Privacy Statement.
              <br />
              <br />
              If you live in the United States or Canada, by agreeing to these
              Terms, you agree to resolve disputes with Udemy through binding
              arbitration (with very limited exceptions, not in court), and you
              waive certain rights to participate in class actions, as detailed
              in the Dispute Resolution section.
            </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
