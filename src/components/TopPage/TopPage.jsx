import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class TopPage extends Component {
  render() {
    return (
        <Fragment >
        <Container fluid className="top_part p-0">
            <Row className=''>
                <Col className='top-part-content text-center'>
                    <h4 className='top-part-sub-Title'>{this.props.title}</h4>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
