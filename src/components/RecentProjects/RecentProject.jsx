import React, { Component, Fragment } from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import project1 from '../../assets/image/page1.png'
import project2 from '../../assets/image/page2.png'
import project3 from '../../assets/image/page3.png'
import { NavLink } from "react-router-dom";

export default class RecentProject extends Component {
  render() {
    const style = {
      textDecoration: 'none',
      color: '#fff',
    }
    return (
      <Fragment>
        <Container className="Recent_projects text-center">
          <h1 className="service_title text-center">Recent Projects</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={6}>
              <div className="project-card p-3">
                <Card>
                  <Card.Img variant="top" src={project1} />
                  <Card.Body>
                    <Card.Title className="Service-name">Project Name Two</Card.Title>
                    <Card.Text className="service-desc">
                      Some quick example text to build on the Project Name One and make
                      up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary"><NavLink to="project-details" style={style}> Visit Site</NavLink></Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
            <div className="project-card p-3">
                <Card>
                  <Card.Img variant="top" src={project2} />
                  <Card.Body>
                    <Card.Title className="Service-name">Project Name Three</Card.Title>
                    <Card.Text className="service-desc">
                      Some quick example text to build on the Project Name One and make
                      up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary"><NavLink to="project-details" style={style}>Visit Site</NavLink></Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
            <div className="project-card p-3">
                <Card>
                  <Card.Img variant="top" src={project3} />
                  <Card.Body>
                    <Card.Title className="Service-name">Project Name One</Card.Title>
                    <Card.Text className="service-desc">
                      Some quick example text to build on the Project Name One and make
                      up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary"><NavLink to="project-details" style={style}>Visit Site</NavLink></Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
