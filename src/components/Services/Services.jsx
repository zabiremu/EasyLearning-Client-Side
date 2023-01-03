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
        <Row className='mx-auto'>
            <Col lg={4} md={6} sm={12}>
            <div className='Service-card text-center'>
                <img src={ecoomerceIcon} alt="" className='ecoomerceIcon' />
                <h2 className='Service-name'>Ecommerce</h2>
                <p className='service-desc'>I will design and develop ecommerce online store website</p>
            </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <div className='Service-card text-center'>
                <img src={design} alt="" className='design' />
                <h2 className='Service-name'>Web Design</h2>
                <p className='service-desc'>Qualified web design and attractive effects whichs catches visitor's Eye</p>
            </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <div className='Service-card text-center'>
                <img src={web} alt="" className='web' />
                <h2 className='Service-name'>Web Development</h2>
                <p className='service-desc'>Clean and fresh issue free code to make your website dynamic prefectly</p>
            </div>
            </Col>
        </Row>
    </Container>
</Fragment>
)
}
}
