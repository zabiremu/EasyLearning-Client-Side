import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ecoomerceIcon from '../../assets/image/ecommerce.png'
import design from '../../assets/image/design.png'
import web from '../../assets/image/web.png'
export default class Services extends Component {
render() {
return (
<Fragment>
    <Container>
        <Row>
            <Col lg={4} md={6} sm={12}>
                <img src={ecoomerceIcon} alt="" className='ecoomerceIcon'/>
            </Col>
            <Col lg={4} md={6} sm={12}>
                <img src={design} alt="" className='design' />
            </Col>
            <Col lg={4} md={6} sm={12}>
                <img src={web} alt="" className='web'/>
            </Col>
        </Row>
    </Container>
</Fragment>
)
}
}
