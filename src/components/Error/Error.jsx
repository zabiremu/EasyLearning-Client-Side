import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import error from "../../assets/image/error.svg"

class Error extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col className='text-center'>
                    <img className='loadIcon' src={error} />
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default Error
