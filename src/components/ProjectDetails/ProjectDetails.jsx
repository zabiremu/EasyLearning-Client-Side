import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import pdetails from '../../assets/image/pdetails.png'
export default class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className='pt-4'>
            <Row className='pt-5'>
                <Col lg="6" md="6" sm="6">
                  <div className="about-thumb-wrap after-shape"></div>
                  <img src={pdetails} alt="" />
                </Col>
                <Col lg="6" md="6" sm="6">
                  <div>
                    <h4 className="p-details-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                    <p className="p-details-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum quos nemo fugiat cum exercitationem totam quis error, reiciendis possimus et sapiente, repudiandae libero minima quia dolor quibusdam, aut velit.</p>
                    <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>Requirment Gathering</p>
                        <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>System Analysis</p>
                        <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>Coding Testing</p>
                        <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>Implementation</p>
                        <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>Implementation</p>
                        <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>Implementation</p>
                        <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>Implementation</p>
                        <p className="card_subtitle text-justify"><span><i class="fa-solid fa-square-check pe-2"></i></span>Implementation</p>
                  </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
