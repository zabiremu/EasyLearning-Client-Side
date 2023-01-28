import React, { Component, Fragment } from 'react'
import loadIcon from "../../assets/image/Spin-1s-200px.svg"
import { Container, Row, Col } from "react-bootstrap";

export default class LoadIcon extends Component {
  render() {
    return (
      <Fragment>
        <Container className='p-0 h-100'>
            <Row className='align-items-center justify-content-center h-100 m-0'>
                <Col lg="12" className="text-center">
                    <img className='loadIcon' src={loadIcon} alt="" />
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
