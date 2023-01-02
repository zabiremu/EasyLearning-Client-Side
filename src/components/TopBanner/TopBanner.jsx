import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import '../../assets/css/style.css'
export default class TopBanner extends Component {
  render() {
    return (
      <Fragment >
        <Container fluid className="top-banner">
            <Row className=''>
                <Col className='top-content text-center'>
                    <h1>Easy Learning</h1>
                    <h4>Learn Profesionally</h4>
                    <button className='btn btn-primary'>Learn More</button>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
