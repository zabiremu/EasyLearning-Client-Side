import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          Technology: "PHP",
          project: 100,
        },
        {
          Technology: "Mysqli",
          project: 90,
        },
        {
          Technology: "Laravel",
          project: 95,
        },
        {
          Technology: "React",
          project: 85,
        },
        {
          Technology: "Opencart",
          project: 80,
        },
        {
          Technology: "Vue Js",
          project: 70,
        },
        {
          Technology: "Django",
          project: 60,
        },
        {
          Technology: "JavaScript",
          project: 100,
        },
      ],
    };
  }
  render() {
    return (
      <Fragment>
        <Container className="service">
          <h1 className="service_title text-center">Technolgy Used</h1>
          <div className="bottom"></div>
          <Row className="mx-auto">
            <Col lg={6} md={12} sm={12}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={this.state.data}>
                  <XAxis dataKey="Technology" />
                  <Tooltip />
                  <Bar dataKey="project" fill="#051b35" />
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div>
                <p className="text-justify service-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  <br />
                  <br />
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                  harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                  quia. Quo neque error repudiandae fuga? Ipsa laudantium
                  molestias eos sapiente officiis modi at sunt excepturi
                  expedita sint?
                  <br/><br/>
                  Sed quibusdam recusandae alias error harum
                  maxime adipisci amet laborum. Perspiciatis minima nesciunt
                  dolorem!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
