import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export default class TopBanner extends Component {
  render() {
    return (
      <Fragment >
        <Container fluid className="top-banner p-0">
            <Row className=''>
                <Col className='top-content text-center'>
                    <h1 className='top-Title'>Easy Learning</h1>
                    <h4 className='top-sub-Title'>Learn Profesionally</h4>
                    <button className='btn btn-primary'>Learn More</button>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
